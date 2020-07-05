import express from 'express';
import firebaseDB from '../../firebaseDB';

class AddressController {
  public getList = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    const data = await new Promise((resolve, reject) => {
      firebaseDB.ref('/address').on('value', function (data) {
        resolve(data);
      });
    });

    return res.json({
      message: 'list',
      data,
    });
  };

  public addAddress = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    const postData = req.body;
    const nextIndex: number = await new Promise((resolve, reject) => {
      firebaseDB.ref('/address/addresses').on('value', function (data) {
        const addresses = data.toJSON();
        const nextIndex =
          addresses === null ? 0 : Object.keys(addresses).length;
        resolve(nextIndex);
      });
    });
    await firebaseDB.ref('/address/addresses').update({
      [nextIndex]: postData,
    });
    return res.json({
      message: 'add',
      data: {
        [nextIndex]: postData,
      },
    });
  };

  public removeAddress = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    const { id } = req.body;

    try {
      const [targetRecordIndex, targetRecord] = await new Promise(
        (resolve, reject) => {
          firebaseDB.ref('/address/addresses').on('value', function (data) {
            const addresses = data.toJSON();
            const targetRecord = Object.entries(addresses ?? {}).find(
              ([key, value]) => value.id === id,
            );
            if (!targetRecord) {
              reject(`${id} not found`);
            }
            resolve(targetRecord);
          });
        },
      );

      const removeItem = async (index) => {
        if (index) {
          await firebaseDB.ref(`/address/addresses/${index}`).remove();
          return 'success to remove';
        }
        return 'failed to remove';
      };
      const message = await removeItem(targetRecordIndex);
      return res.json({
        message,
        data: {
          [targetRecordIndex]: targetRecord,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };

  public setDefaultAddress = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    const { id } = req.body;

    try {
      const [targetRecordIndex, targetRecord] = await new Promise(
        (resolve, reject) => {
          firebaseDB.ref('/address/addresses').on('value', function (data) {
            const addresses = data.toJSON();
            const targetRecord = Object.entries(addresses ?? {}).find(
              ([key, value]) => value.id === id,
            );
            if (!targetRecord) {
              reject(`${id} not found`);
            }
            resolve(targetRecord);
          });
        },
      );
      const setDefault = async (index) => {
        if (index) {
          await firebaseDB.ref(`/address/default`).set(id);
          return 'success to set';
        }
        return 'failed to set';
      };
      const message = await setDefault(targetRecordIndex);
      return res.json({
        message,
        data: {
          [targetRecordIndex]: targetRecord,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };
}

export default new AddressController();

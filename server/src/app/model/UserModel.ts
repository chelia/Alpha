/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IUserModel = require('./interfaces/UserModel');

class UserModel {

    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }
    get type (): string {
        return this._userModel.type;
    }

    get username (): string {
        return this._userModel.username;
    }

    get password (): string {
        return this._userModel.password;
    }

    get email (): string {
        return this._userModel.email;
    }

    get phone (): number {
        return this._userModel.phone;
    }

}
Object.seal(UserModel);
export =  UserModel;
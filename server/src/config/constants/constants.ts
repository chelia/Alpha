/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://sergio:qwerty@ds115131.mlab.com:15131/prueba";
}
Object.seal(Constants);
export = Constants;
import { Model, model, Schema } from "mongoose";

export interface Iuser{
    name: string;
    email: string;
    pass: string;
    code?: string;
    verified?: string;

}

const userSchema = new Schema<Iuser>({
    name:{
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    email:{
        type: String,
        required: [true, 'Correo obligatorio']
    },
    pass:{
        type: String,
        required: [true, 'Contraseña obligatoria']
    },
    code:{
        type: String
    },
    verified:{
        type: Boolean,
        default: false
    }
});

userSchema.methods.toJSON = function(){
    const {__v, pass, code, _id, ...usuario} = this.toObject();
    return usuario
}


const Usuario: Model<Iuser> = model<Iuser>("Usuario", userSchema)

export default Usuario
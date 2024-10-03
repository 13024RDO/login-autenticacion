import dbLocal from "db-local";

const { Schema } = new dbLocal({ path: "./db" });
const User = Schema("User", {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export class UserRepository {
  static create({ username, password }) {
    
    if (!username || typeof username !== "string") {
      throw new Error("Username es requerido y debe ser una cadena de texto.");
    }
    if (username.length < 4 || username.length > 20) {
      throw new Error("El username debe tener entre 4 y 20 caracteres.");
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      throw new Error(
        "El username solo puede contener letras, números y guiones bajos."
      );
    }

    
    if (!password || typeof password !== "string") {
      throw new Error("Password es requerido y debe ser una cadena de texto.");
    }
    if (password.length < 6 || password.length > 50) {
      throw new Error("El password debe tener entre 6 y 50 caracteres.");
    }
    if (!/[A-Z]/.test(password)) {
      throw new Error(
        "El password debe contener al menos una letra mayúscula."
      );
    }
    if (!/[a-z]/.test(password)) {
      throw new Error(
        "El password debe contener al menos una letra minúscula."
      );
    }
    if (!/[0-9]/.test(password)) {
      throw new Error("El password debe contener al menos un número.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      throw new Error(
        "El password debe contener al menos un carácter especial."
      );
    }

    const user = User.findOne({username})
    if(user) throw new Error("username already exists"
    )

    const id = crypto.randomUUID()

    user.create({
      id,
      username,
      password
    }).save()

    return(id)
  }

  static login ({username,password})
}

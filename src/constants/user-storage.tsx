export default function userData() {
 const userStorage = localStorage.getItem("authValidation");
 let user = {
  name: "",
  url_image: "",
  token: "",
  email: ""
 };
 if (userStorage) {
  user = JSON.parse(userStorage);
  
 } 
 return user;
}

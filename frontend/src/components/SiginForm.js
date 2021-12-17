// import { React, useState } from "react";
// // import { useHistory } from "react-router-dom";
// // import axios from "axios";
// import { useForm } from "react-hook-form";
// import classNames from "classnames";

// function SigninForm() {
//   //   const history = useHistory();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     mode: "onChange",
//     mode: "onTouched",
//   });
//   console.log(errors);
//   // const [sname, setsname] = useState("");
//   // const [address, setaddress] = useState("");
//   // const [email, setemail] = useState("");
//   // const [password, setpassword] = useState("");
//   // const [filename, setfilename] = useState("");

//   // const onChangeFile = (event) => {
//   //   // console.log(event);
//   //   // console.log(event.target);
//   //   // console.log(event.target.files[0]);

//   //   setfilename(event.target.files[0]);
//   // };

//   // const onChangeClick = (event) => {
//   //   event.preventDefault();

//   //   const fd = new FormData();
//   //   fd.append("sName", sname);
//   //   fd.append("address", address);
//   //   fd.append("email", email);
//   //   fd.append("password", password);
//   //   fd.append("shopImage", filename);

//   //   setsname("");
//   //   setaddress("");
//   //   setemail("");
//   //   setpassword("");
//   //   setfilename("");

//   //   axios
//   //     .post("/register", fd)
//   //     .then((res) => console.log(res.data))
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // };

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <>
//       <div className="rounded container shadow p-3 mb-5 rounded container-main">
//         {/* <img src="/images/avatar.png" className="rounded mx-auto d-block img-thumbnail avatar" id="myImg" alt="Shop avatar" /> */}

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="mx-auto main-form"
//           encType="multipart/form-data"
//         >
//           <div className="form-group row">
//             <label htmlFor="inputUserName" className="col-sm-2 col-form-label">
//               Name
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="text"
//                 name="sName"
//                 // value={sname}
//                 // onChange={(e) => setsname(e.target.value)}
//                 className={classNames(
//                   "form-control w-75 p-3 h-50 d-inline-block",
//                   { "is-invalid": errors.sName }
//                 )}
//                 id="inputUserName"
//                 placeholder="Enter Name"
//                 {...register("sName", {
//                   required: true,
//                   minLength: 4,
//                 })}
//               />
//               <small className="form-text text-danger">
//                 {errors.sName?.type === "required" && (
//                   <p>"This field is required"</p>
//                 )}
//               </small>

//               <small className="form-text text-danger">
//                 {errors.sName?.type === "minLength" && (
//                   <p>Shop name must be greater than 4 characters.</p>
//                 )}
//               </small>
//             </div>
//           </div>
//           {/* <div className="form-group row">
//             <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
//               Address
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="text"
//                 name="address"
//                 // value={address}
//                 // onChange={(e) => setaddress(e.target.value)}
//                 className="form-control w-75 p-3 h-50 d-inline-block"
//                 id="inputAddress"
//                 placeholder="Enter your shop's ddress"
//               />
//             </div>
//           </div> */}
//           {/* <div className="form-group row">
//             <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
//               Email
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="email"
//                 name="email"
//                 // value={email}
//                 // onChange={(e) => setemail(e.target.value)}
//                 className="form-control w-75 p-3 h-50 d-inline-block"
//                 id="inputEmail3"
//                 placeholder="Email"
//               />
//             </div>
//           </div> */}
//           <div className="form-group row">
//             <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
//               Password
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="password"
//                 name="password"
//                 // value={password}
//                 // onChange={(e) => setpassword(e.target.value)}
//                 className={classNames(
//                   "form-control w-75 p-3 h-50 d-inline-block",
//                   { "is-invalid": errors.password }
//                 )}
//                 id="inputPassword3"
//                 placeholder="Password"
//                 {...register("password", {
//                   required: "This field is required",
//                   minLength: {
//                     value: 4,
//                     message: "Password must be long atleast 4 characters",
//                   },
//                 })}
//               />

//               {errors.password && (
//                 <div className="invalid-feedback">
//                   {errors.password.message}
//                 </div>
//               )}
//             </div>
//           </div>
//           {/* <div className="form-group row">
//             <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
//               Choose Shop Image
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="file"
//                 name="shopImage"
//                 filename="shopImage"
//                 // onChange={onChangeFile}
//                 className="form-control w-75 p-3 h-50 d-inline-block"
//                 id="image"
//                 placeholder="Choose Image"
//               />
//             </div>
//           </div> */}
//           {/* <div className="form-group row">
//                         <label htmlFor="Image" className="col-sm-2 col-form-label align-baseline">Image</label>
//                         <div className="col-sm-10">
//                             <input type="file" className="form-control form-control-file w-75 p-3 h-75 d-inline-block" id="inputImage" name="sImage"/>
//                         </div>
//                     </div> */}

//           {/* Checkbox For Categories */}
//           {/* <div className="form-group row">
//                         <label htmlFor="Categories" className="col-sm-2 col-form-label">Select Categories </label>
//                         <div className="container grid-container">
//                             <div className="row">
//                                 <div className="col-6">
//                                     <input className="form-check-input" type="checkbox" id="gridCheck1" />
//                                     <label className="form-check-label" htmlFor="gridCheck1">
//                                         Bags
//                                     </label>
//                                 </div>
//                                 <div className="col-6">
//                                     <input className="form-check-input" type="checkbox" id="gridCheck2" />
//                                     <label className="form-check-label" htmlFor="gridCheck2">
//                                         Shoes
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-6">
//                                     <input className="form-check-input" type="checkbox" id="gridCheck3" />
//                                     <label className="form-check-label" htmlFor="gridCheck3">
//                                         Clothes
//                                     </label>
//                                 </div>
//                                 <div className="col-6">
//                                     <input className="form-check-input" type="checkbox" id="gridCheck4" />
//                                     <label className="form-check-label" htmlFor="gridCheck4">
//                                         Watch
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <div className="col-sm-10">
//                                 <button type="submit" className="btn btn-sign-in" name="signup" onClick={PostData}>Sign in</button>
//                             </div>
//                         </div>
//                     </div> */}
//           <div className="form-group row">
//             <div className="col-sm-10">
//               <input
//                 type="submit"
//                 // value="Sign in"
//                 // name="signup"
//                 // id="signup"
//                 className="btn btn-sign-in"
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default SigninForm;

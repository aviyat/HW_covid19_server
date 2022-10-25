
// const member = require('../models/member')
// const jwt = require('jsonwebtoken')
// const request = require('request')
const env = require('dotenv')
const Vaccination = require('../models/vaccination')
// const { findById } = require('../models/member')
// const vaccination= require('../models/vaccination')


// env.config()
// const addVaccinattion = async (req, res) => {
//     console.log("add");
//     const post = req.body
//     console.log(post);
//     const currentVaccinattion= new Vaccinattion(post)
//     try {
//         console.log(post)
//         await currentVaccinattion.save()
//         console.log(currentVaccinattion)

//         res.status(200).json({ massage: 'Vaccinattion created', myVaccination: vaccinattion })
//     }
//     catch (err) {
//         res.status(400).json({ message: err.massage })
//     }
// }



// module.exports = { addVaccinattion }








// <div>

// <form>
//     <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="container-fluid">
//             {/* <div class="row"> */}
//             <div class="modal-dialog" role="document">
//                 <div class="modal-content">
//                     <div class=".col-md-6 .col-sm-6 ">
//                         <div class="modal-header ">

//                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <br></br>
//                         <label className="label">url</label>
//                         <input className="input" type="text" placeholder="memberName" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
//                         <input className="input" type="text" placeholder="bornDate" value={bornDate} onChange={(e) => setBornDate(e.target.value)} />
//                         <input className="input" type="text" placeholder="url" value={url} onChange={(e) => setUrl(e.target.value)} />
//                         <input className="input" type="text" placeholder="adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
//                         <input className="input" type="text" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
//                         <input className="input" type="text" placeholder="mobilePhone" value={mobilePhone} onChange={(e) => setMobilePhone(e.target.value)} />


//                     </div>

//                 </div>
//             </div>
//         </div>
        
//     <div className="field">
//         <button className="button is-primary" onClick={updateMember}>Update</button>

//     </div>

//     </div>

   


// </form >
// </div>
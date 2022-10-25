
const member = require('../models/member')
const jwt = require('jsonwebtoken')
const request = require('request')
const env = require('dotenv')
const Member = require('../models/member')
// const { findById } = require('../models/member')
const vaccination= require('../models/vaccination')


env.config()


const getAllMembers = (req, res) => {
    member.find().populate('history').then(data => res.send(data))
}


const addMember = async (req, res) => {
    console.log("sign");
    const post = req.body
    console.log(post);
    const currentMember = new Member(post)
    try {
        console.log(post)
        await currentMember.save()
        console.log(currentMember)

        res.status(200).json({ massage: 'member created', myMember: member })
    }
    catch (err) {
        res.status(400).json({ message: err.massage  })
    }
}


const deleteMember = async (req, res) => {
    // let member = await Member.findById(req.params._id)

    try {
            const member = await Member.findOne({ id: req.params.id })

        await member.remove();

        res.status(200).send("the member is delete");
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}
// export const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findAll({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json(product[0]);
//     } catch (error) {
//         res.json({ message: error.message });
//     }  
// }

// const getMemberById = async (req, res) => {
//     try {
//         const member = await Member.findById(req.params.id);
//          res.status(200).json({ massage: 'member found', myMember: member })
//     } catch (error) {
//         res.json({ message: error.message });
//     }
// }

const getMemberById = async (req, res) => {
    try {
        // findById(req.params.id)
        const member = await Member.findOne({ id: req.params.id })
        res.status(200).json({ massage: 'member found', myMember: member })
    } catch (error) {
        res.json({ message: error.message });
    }
}

const updateMember = (req, res) => {
    Member.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(data => { res.status(200).json({ massage: 'member update sucsessfuly' }) })
        .catch(err => { res.status(400).send(err) })
}
//  const updateMember =  (req, res) => {
//     try {
//          Member.up(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "member Updated"
//         });
//     } catch (error) {
//         res.json({ message: error.message });
//     }  
// }


module.exports = { getAllMembers, addMember, deleteMember, updateMember, getMemberById }

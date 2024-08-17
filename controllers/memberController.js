
import memberModel from "../model/memberModel.js"
// import fs from "fs"
// import slugify from "slugify"

// export const memberController = async (req, res) => {

//     try {
//         const { membername, role, dateofbirth, gender, nationality, contact, email } = req.fields;

//         const { photo } = req.files;
//         console.log(req.fields)

//         //validation
//         switch (true) {
//             case !membername:
//                 return res.status(500).send({ error: "membername is Required" });
//             case !role:
//                 return res.status(500).send({ error: "role is Required" });
//             case !dateofbirth:
//                 return res.status(500).send({ error: "dateofbirth is Required" });
//             case !gender:
//                 return res.status(500).send({ error: "gender is Required" });
//             case !contact:
//                 return res.status(500).send({ error: "contact is Required" });
//             case !email:
//                 return res.status(500).send({ error: "email is Required" });
//             case !nationality:
//                 return res.status(500).send({ error: "nationality is Required" })
//             case photo && photo.size > 1000000:
//                 return res.status(500)
//                     .send({ error: "Photo is Required and should be less than 1mb" })
//         }

//         const members = new memberModel({ ...req.fields, slug: slugify(membername) })
//         if (photo) {
//             members.photo.data = fs.readFileSync(photo.path);
//             members.photo.contentType = photo.type;

//         }
//         await members.save();
//         res.status(201).send({
//             success: true,
//             message: "Member Created Successfully",
//             members,
//         });

//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             success: false,
//             message: "Error in create member",
//             error
//         })
//     }
// }


export const memberController = async (req, res) => {
    try {
        const data = req.body;

        const createList = new memberModel(data)
        await createList.save();
        res.status(201).send({
            success: true,
            message: "List Create successfully",
            createList
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in create member",
            error
        })
    }
}


export const getMemberController = async (req, res) => {
    try {

        const getallmember = await memberModel.find({})
        res.status(200).json({
            success: true,
            message: "Get All member",
            getallmember
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in getting member",
            error
        })
    }
}

export const getSingleMemberController = async (req, res) => {
    try {


        const getSingleMember = await memberModel.findById(req.params.id)
        if(!getSingleMember){
            return res.status(404).send("Member Not Found")
        }
        res.status(200).json({
            success:true,
            message:"Get single member Successfully",
            getSingleMember
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in getting member",
            error
        })
    }
}

export const filterMemberController = async (req, res) => {
    try {
        const {role, teams } = req.query;

        let filter = {};
         if(role){
            filter.role = role;
         }

         if(teams){
            filter.teams = {$in: teams.split(',')};
         }

         const getallmember = await memberModel.find(filter)

         res.status(200).json({
            success:true,
            message:"Get all member successfully",
            getallmember
         })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in filtering member",
            error
        })
    }
}



export const deleteMemberController = async (req, res) => {
    try {
        const {id} = req.params;

        const deleteMember = await memberModel.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            message:"Member Delete Successfully",
            deleteMember
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Delet member",
            error
        })
    }
}
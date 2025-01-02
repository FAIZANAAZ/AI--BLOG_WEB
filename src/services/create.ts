"use server"
// src\services\create.ts
import { client } from "@/sanity/lib/client";


// --------------------------------------------------------------fetch
// yha hm sanity sy data lekr ary hen
export const myFetch = async (blog_id: number) => {
  const comments = await client.fetch(
    `*[_type == "blogComment" && my_id == ${blog_id}]`
  );
  return comments;
};



// --------------------------------------------------------------create
// yha hm sanity me data dal rhy hen
// lekin ye jb hi create krny dega jb hm sanity/client.ts ki file me jakr ysecdn ko false krengy or  token: process.env.SANITY_TOKEN, add krengy or  osky token dengy jo hm sanity ki websitesy create krty he env.local ki file me

interface Comment {
  name: string;
  email: string;
  comment: string;
  my_id: number;
}

export const createComment = async (newComment: Comment) =>{
    
  await client.create({  
    _type: 'blogComment',
    ...newComment,
    // yha hm iski copy nikal kr bhejrhy hen 
  })
    
    return await myFetch(newComment.my_id);
    // or dal kr yahi pr wapas mangwa liya hmny yha
}



// --------------------------------------------------------------Update
// yha hm sanity sy data update krwa rhy hen
export const updateComment = async (_id: string, UpdatedComment: Comment) =>{
  // yejo _id he ye ak esi id he jo sanity khod bnata he or bheja he  har data ki ala alg jo hm id bnaty wo nhi osky ilawa khod yad rkhny ke liye

  await client.patch(_id)
  // patch sy hm pkar rhy hen os id ko jo sanity khod bnata he isi liye hmny _ lgaya he taky hmari id sy mix na ho
    .set({
      name: UpdatedComment.name,
      email: UpdatedComment.email,
      message: UpdatedComment.comment
      // ismy jitn chizen likheni hen wo on sb ko chang kryga agr hm chty koch change yani update na ho to hm phir nhi dengy osy yha
    })
    .commit();
    
    return await myFetch(UpdatedComment.my_id);
    // yha gain kr diya
}


// --------------------------------------------------------------Delete
// yha hm sanity sy data delete krwa rhy hen
export const deleteComment = async (_id: string, my_id: number) =>{
    await client.delete(_id)

    return await myFetch(my_id);
}




// yha wahi fetch create yani pot patch or delete hen api me jesy hoty hen




// "use server"
// import { client } from "@/sanity/lib/client";

// // --------------------------------------------------------------fetch
// export const myFetch = async (blog_id: number) => {
//   const comments = await client.fetch(
//     `*[_type == "blogComment" && id == ${blog_id}]`
//   );
//   return comments;
// };

// --------------------------------------------------------------create
// interface Comment {
//   name: string;
//   email: string;
//   comment: string;
//   my_id: number;
// }

// export const createComment = async (newComment: Comment) => {
//   const createdComment = await client.create({  
//     _type: 'blogComment',
//     ...newComment,
//   });
  
//   const updatedComments = await myFetch(newComment.my_id);
//   return [...updatedComments, createdComment];
// }

// // --------------------------------------------------------------Update
// export const updateComment = async (_id: string, UpdatedComment: Comment) => {
//   await client.patch(_id)
//     .set({
//       name: UpdatedComment.name,
//       email: UpdatedComment.email,
//       message: UpdatedComment.comment
//     })
//     .commit();
    
//   return await myFetch(UpdatedComment.my_id);
// }

// // --------------------------------------------------------------Delete
// export const deleteComment = async (_id: string, my_id: number) => {
//   await client.delete(_id)
//   return await myFetch(my_id);
// }


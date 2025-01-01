"use client"
import React, { useEffect, useState } from 'react'
import { LiaCommentsSolid } from 'react-icons/lia'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaUserPen } from "react-icons/fa6";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { Toaster, toast } from 'sonner';
import { createComment, deleteComment, myFetch, updateComment }  from '../services/create'
import ReviewCard from './ReviewCard'
import { Button } from './ui/button'



interface Comment {
  my_id: number,
  name: string,
  email: string,
  comment: string
  _id:string
}
const CommentBlog = ({blog_id}:{blog_id:number}) => {
 
  // FOR COMMENT FUNCTIONALITY
  const [name, SetName] = useState("")
  const [email, SetEmail] = useState("")
  const [comment, SetComment] = useState("")
  const [cmtArray, setCmtArray] = useState<Comment[]>([])
  const [btnName, setBtnName] = useState("Post")
  const [findCard, setFindCard] = useState<Comment | null>(null)


  // --------------------------------create
  const postComment = async () => {
    const cardFound = cmtArray.find((comment) => comment._id === findCard?._id);
  
    if (cardFound) {
      const UpdatedComment = { name, email, comment, my_id: Number(blog_id) };
      const res = await updateComment(cardFound._id, UpdatedComment)
      setCmtArray(res);
      SetName('');
      SetEmail('');
      SetComment('');
      handleClose();
      setBtnName('Post')
      setFindCard(null)
      toast.success('Comment updated successfully');
    }
    
    else if (name && email && comment && !cardFound) {
      const newComment = { name, email, comment, my_id: Number(blog_id) };
      try {
        const res = await createComment(newComment);
        setCmtArray(res);
        console.log("🚀",res);
        SetName('');
        SetEmail('');
        SetComment('');
        handleClose();
        toast.success('Comment posted successfully');
        
      } catch (error) {
        console.error('Error posting comment:', error);
      }
    } else {
      toast.error('Please fill all the fields');
    }
  };
  
  
// ------------------------------------------------fetch
useEffect(() => {
  const fetchComments = async () => {
    try {
      const comments = await myFetch(blog_id);
      setCmtArray(comments);
      console.log("💡",comments);
      
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  fetchComments();
},[blog_id]);


// ------------------------------------------------set update input fields
const setUpdateInputFields = (data: Comment) => {
  setCommentBox(true);
  SetName(data.name);
  SetEmail(data.email);
  SetComment(data.comment);
  setBtnName('Update')
  setFindCard(data)
}

// ------------------------------------------------Delete
const deleteFunction = async (_id: string) => {
  const res = await deleteComment(_id, blog_id);
  setCmtArray(res);
  toast.success('Comment deleted successfully');
}





 // FOR ON OFF INPUT BOX
 const [commentBox, setCommentBox] = useState<boolean>(false)
  

  const handleClose = () => {
    setCommentBox(false)
  }




  return (
  <>
  <div className=' container mx-auto p-2   w-full flex flex-col md:flex-row  justify-start items-center gap-2 '>
    {/* heading */}

  <div className='flex border-2 border-white gap-2 bg-blue-950 p-5 mb-7'>
    <LiaCommentsSolid color='white' size={30} />
  <h1 className='md:text-2xl  text-[1.25rem] text-start font-bold text-white cursor-pointer' onClick={()=>setCommentBox(!commentBox)}>Add  Comment</h1>
  </div>
  
  {/* input */}
  {commentBox &&(
    <div className=' mx-auto py-12  flex  justify-start items-center gap-2 '>
    <form className='flex flex-col  gap-2 font-medium text-[20px] p-2 md:p-4 bg-slate-900 text-white border-white border-2 border-double'>
     <div className='flex flex-col md:flex-row gap-2'>

     <div className='flex  p-5 justify-start items-center gap-3'>
     <label className='flex justify-center items-center gap-2'><FaUserPen size={30}/>Name</label>
     <Input type='text' placeholder='Enter your name' className=''
     value={name} onChange={(e) => SetName(e.target.value)} />
     </div>

     <div className='flex p-5 justify-start items-center gap-3'>
     <label  className='flex justify-center items-center gap-2'><MdOutlineMailOutline  size={30}/>Email</label>
     <Input type='email' placeholder='Enter your name' className=''
     value={email} onChange={(e) => SetEmail(e.target.value)} />
     </div>

     </div>

     <div className='flex p-5 justify-start items-center gap-3'>
     <label className='flex justify-center items-center gap-2'><TfiCommentsSmiley size={30}/>Comment</label>
     <Textarea placeholder='Add your Comment' className=''
     value={comment} onChange={(e) => SetComment(e.target.value)} />
     </div>
<div className='w-full flex justify-center items-center '>
<Button className='bg-blue-950 text-white p-2 rounded-md w-[40%] border-white border-2 ' onClick={postComment}>{btnName}</Button>
</div>
    </form>

  </div>
  )
    
  }
  <hr className='my-4'/>
      {cmtArray.map((comment: Comment, index: number) => (
         <ReviewCard
         data={comment}
         key={index}
         setUpdateInputFields={setUpdateInputFields}
         deleteFunction={deleteFunction}
       />
      ))}
  </div>
  </>
  )
}

export default CommentBlog







// const Comment = ({blog_id}:{blog_id:number}) => {
//   const [name, SetName] = useState("")
//   const [email, SetEmail] = useState("")
//   const [comment, SetComment] = useState("")
//   const [cmtArray, setCmtArray] = useState<Comment[]>([])
//   const [btnName, setBtnName] = useState("Post")
//   const [findCard, setFindCard] = useState<Comment | null>(null)
//   const [commentBox, setCommentBox] = useState<boolean>(false)

//   const postComment = async () => {
//     const cardFound = cmtArray.find((comment) => comment._id === findCard?._id);
  
//     if (cardFound) {
//       const UpdatedComment = { name, email, comment, my_id: Number(blog_id) };
//       const res = await updateComment(cardFound._id, UpdatedComment)
//       setCmtArray(res);
//       SetName('');
//       SetEmail('');
//       SetComment('');
//       handleClose();
//       setBtnName('Post')
//       setFindCard(null)
//       toast.success('Comment updated successfully');
//     }
    
//     else if (name && email && comment && !cardFound) {
//       const newComment = { name, email, comment, my_id: Number(blog_id) };
//       try {
//         // Optimistically update the state
//         setCmtArray(prevComments => [...prevComments, { ...newComment, _id: Date.now().toString() }]);
        
//         const res = await createComment(newComment);
//         setCmtArray(res);
//         console.log("🚀",res);
//         SetName('');
//         SetEmail('');
//         SetComment('');
//         handleClose();
//         toast.success('Comment posted successfully');
        
//       } catch (error) {
//         console.error('Error posting comment:', error);
//         // If there's an error, revert the optimistic update
//         setCmtArray(prevComments => prevComments.filter(comment => comment._id !== Date.now().toString()));
//         toast.error('Failed to post comment');
//       }
//     } else {
//       toast.error('Please fill all the fields');
//     }
//   };
  
//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const comments = await myFetch(blog_id);
//         setCmtArray(comments);
//         console.log("💡",comments);
        
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     };
//     fetchComments();
//   },[blog_id]);

//   const setUpdateInputFields = (data: Comment) => {
//     setCommentBox(true);
//     SetName(data.name);
//     SetEmail(data.email);
//     SetComment(data.comment);
//     setBtnName('Update')
//     setFindCard(data)
//   }

//   const deleteFunction = async (_id: string) => {
//     const res = await deleteComment(_id, blog_id);
//     setCmtArray(res);
//     toast.success('Comment deleted successfully');
//   }

//   const handleClose = () => {
//     setCommentBox(false)
//   }

//   return (
//     <>
//       <div className='container mx-auto p-2 w-full flex flex-col md:flex-row justify-start items-center gap-2'>
//         <div className='flex border-2 border-white gap-2 bg-blue-950 p-5 mb-7'>
//           <LiaCommentsSolid color='white' size={30} />
//           <h1 className='md:text-2xl text-[1.25rem] text-start font-bold text-white cursor-pointer' onClick={()=>setCommentBox(!commentBox)}>Add Comment</h1>
//         </div>
        
//         {commentBox && (
//           <div className='mx-auto py-12 flex justify-start items-center gap-2'>
//             <form className='flex flex-col gap-2 font-medium text-[20px] p-2 md:p-4 bg-slate-900 text-white border-white border-2 border-double'>
//               <div className='flex flex-col md:flex-row gap-2'>
//                 <div className='flex p-5 justify-start items-center gap-3'>
//                   <label className='flex justify-center items-center gap-2'><FaUserPen size={30}/>Name</label>
//                   <Input type='text' placeholder='Enter your name' className=''
//                   value={name} onChange={(e) => SetName(e.target.value)} />
//                 </div>
//                 <div className='flex p-5 justify-start items-center gap-3'>
//                   <label className='flex justify-center items-center gap-2'><MdOutlineMailOutline size={30}/>Email</label>
//                   <Input type='email' placeholder='Enter your email' className=''
//                   value={email} onChange={(e) => SetEmail(e.target.value)} />
//                 </div>
//               </div>
//               <div className='flex p-5 justify-start items-center gap-3'>
//                 <label className='flex justify-center items-center gap-2'><TfiCommentsSmiley size={30}/>Comment</label>
//                 <Textarea placeholder='Add your Comment' className=''
//                 value={comment} onChange={(e) => SetComment(e.target.value)} />
//               </div>
//               <div className='w-full flex justify-center items-center'>
//                 <Button className='bg-blue-950 text-white p-2 rounded-md w-[40%] border-white border-2' onClick={postComment}>{btnName}</Button>
//               </div>
//             </form>
//           </div>
//         )}
//         <hr className='my-4'/>
//         {cmtArray.map((comment: Comment, index: number) => (
//           <ReviewCard
//             data={comment}
//             key={index}
//             setUpdateInputFields={setUpdateInputFields}
//             deleteFunction={deleteFunction}
//           />
//         ))}
//       </div>
//     </>
//   )
// }

// export default Comment


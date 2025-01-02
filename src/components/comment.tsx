"use client"
import { useEffect, useState } from 'react'
import { LiaCommentsSolid } from 'react-icons/lia'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaUserPen } from "react-icons/fa6"
import { TfiCommentsSmiley } from "react-icons/tfi"
import { Toaster, toast } from 'sonner'
import { createComment, deleteComment, myFetch, updateComment } from '../services/create'
import ReviewCard from './ReviewCard'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { X } from 'lucide-react'

interface Comment {
  my_id: number,
  name: string,
  email: string,
  comment: string
  _id: string
}

const CommentBlog = ({ blog_id }: { blog_id: number }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [cmtArray, setCmtArray] = useState<Comment[]>([])
  const [btnName, setBtnName] = useState("Post")
  const [findCard, setFindCard] = useState<Comment | null>(null)
  const [commentBox, setCommentBox] = useState<boolean>(false)

  const postComment = async (e: React.FormEvent) => {
    e.preventDefault()

    
    
    if (findCard) {
      const updatedComment = { name, email, comment, my_id: Number(blog_id) }
      try {
        const res = await updateComment(findCard._id, updatedComment)
        setCmtArray(prevComments => 
          prevComments.map(c => c._id === findCard._id ? { ...res, ...updatedComment } : c)
        )
        resetForm()
        toast.success('Comment updated successfully')
      } catch (error) {
    
      
        toast.error(`Failed to update comment ${error} `)
      }
    } else if (name && email && comment) {
      const newComment = { name, email, comment, my_id: Number(blog_id) }
      try {
        const res = await createComment(newComment)
        setCmtArray(res)
        resetForm()
        toast.success('Comment posted successfully')
      } catch (error) {
     
        toast.error(`Failed to post comment ${error} `)
      }
    } else {
      toast.error('Please fill all the fields')
    }
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setComment('')
    setCommentBox(false)
    setBtnName('Post')
    setFindCard(null)
  }

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await myFetch(blog_id)
        setCmtArray(comments)
      } catch (error) {
        alert(`Error fetching comments:${error} `)
      }
    }
    fetchComments()
  }, [blog_id])

  const setUpdateInputFields = (data: Comment) => {
    setCommentBox(true)
    setName(data.name)
    setEmail(data.email)
    setComment(data.comment)
    setBtnName('Update')
    setFindCard(data)
  }

  const deleteFunction = async (_id: string) => {
    try {
      await deleteComment(_id, blog_id)
      setCmtArray(prevComments => prevComments.filter(comment => comment._id !== _id))
      toast.success('Comment deleted successfully')
    } catch (error) {
     
      toast.error(`Failed to delete comment ${error} `)
    }
  }

  return (
    <>
      <div className='container mx-auto p-2 w-full flex flex-col  justify-start items-center gap-2'>
        {!commentBox ? (
          <div className='flex border-2 border-white gap-2 bg-blue-950 p-5 mb-7'>
            <LiaCommentsSolid color='white' size={30} />
            <h1 className='md:text-2xl text-[1.25rem] text-start font-bold text-white cursor-pointer' onClick={() => setCommentBox(true)}>Add Comment</h1>
          </div>
        ) : (
          <div className='mx-auto py-12 flex justify-start items-center gap-2'>
            <form onSubmit={postComment} className='flex flex-col gap-2 font-medium text-[20px] p-2 md:p-4 bg-slate-900 text-white border-white border-2 border-double'>
              <div className='flex flex-col md:flex-row gap-2'>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCommentBox(false)}
                  className="h-11 w-11"
                >
                  <X className="h-6 w-6" />
                </Button>
                <div className='flex p-5 justify-start items-center gap-3'>
                  <Label htmlFor="firstName" className='flex justify-center items-center gap-2'><FaUserPen size={30} />Name</Label>
                  <Input type='text' placeholder='Enter your name' className=''
                    id="firstName"
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex p-5 justify-start items-center gap-3'>
                  <Label htmlFor="email" className='flex justify-center items-center gap-2'><MdOutlineMailOutline size={30} />Email</Label>
                  <Input type='email' placeholder='Enter your email' className=''
                    id='email'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className='flex p-5 justify-start items-center gap-3'>
                <Label className='flex justify-center items-center gap-2'><TfiCommentsSmiley size={30} />Comment</Label>
                <Textarea placeholder='Write your post or question here' className=''
                  value={comment} onChange={(e) => setComment(e.target.value)} />
              </div>
              <div className='w-full flex justify-center items-center'>
                <Button type="submit" className='bg-blue-950 text-white p-2 rounded-md w-[40%] border-white border-2'>{btnName}</Button>
              </div>
            </form>
          </div>
        )}
        <hr className='my-4' />
        {cmtArray.map((comment: Comment, index) => (
          <ReviewCard
            key={index}
            data={comment}
            setUpdateInputFields={setUpdateInputFields}
            deleteFunction={deleteFunction}
          />
        ))}
      </div>
      <Toaster richColors />
    </>
  )
}

export default CommentBlog


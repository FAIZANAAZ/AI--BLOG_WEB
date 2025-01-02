import emailjs from "emailjs-com"

interface TemplateParams {
    [key: string]: string | number | undefined;
    to_name: string;
    from_name: string;
    email: string;
    message: string;
    contact: number | undefined;
}

export const sendEmail = async (templateParams: TemplateParams) => {
    try {
 const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!; 
 const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
 const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

 const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);

 return response

    } catch (error) {
        console.log("Failed to Send Email",error)
        throw error;
    }
    
} 
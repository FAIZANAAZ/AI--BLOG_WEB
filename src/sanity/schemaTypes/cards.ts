
 export default{
title: 'ALL BLOGS',
name: 'cards',
type: 'document',
fields:[
    {
        title:'Add Blogs',
        name: 'blogs',
        type: 'array',
        of: [
           { type:'object',
            fields:[
                {title:'Blog Image',name:'blogImage',type:'image'},
                {title:'Blog Heading',name:'blogHeading',type:'string'},
                {title:'Blog Date',name:'blogDate',type:'date'},

            ]
           }
        ]
    }
]
}
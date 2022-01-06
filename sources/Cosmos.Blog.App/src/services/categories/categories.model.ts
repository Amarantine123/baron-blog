export interface ICategories{
  id:number,
  parentId:number,
  title:string,
  metaTitle:string,
  slug:string,
  content:string,
  link:string,
  icon:string
}

export const CategoriesMockup:ICategories[]=[
  {
  id:1,
  parentId:0,
  title:'中国哲学',
  metaTitle:'哲学',
  slug:'',
  content:'',
  link:'/index',
  icon:'book'
  },
  {
    id:2,
    parentId:0,
    title:'心理学',
    metaTitle:'心理学',
    slug:'',
    content:'',
    link:'/index',
    icon:'star_purple500'
    },
    {
      id:3,
      parentId:0,
      title:'经济学',
      metaTitle:'经济学',
      slug:'',
      content:'',
      link:'/User',
      icon:'bathtub'
      }
]

export const MenuList=[
  {
    caption:'this is the first menu',
    icon:'favorite_border',
    path:'/index',
    title:'哲学',
    level:0
    },
    {
    caption:'this is the first menu',
    icon:'wifi_lock',
    title:'经济学',
    level:0,
    children:[
      {
        icon:'front_hand',
        path:'/Index',
        title:'西方经济学',
        caption:'first meta title'
      },
      {
        icon:'front_hand',
        path:'/user',
        title:'马克思经济学原理',
        caption:'second meta title'
      }
    ]},
  {
    caption:'this is the second menu',
    icon:'emoji_emotions',
    title:'管理学',
    level:0,
    children:[
      {
        icon:'hiking',
        path:'/Index',
        title:'行政管理',
        caption:'first meta title'
      },
      {
        icon:'hiking',
        path:'/user',
        title:'酒店管理',
        caption:'second meta title'
      }
  ]}
]

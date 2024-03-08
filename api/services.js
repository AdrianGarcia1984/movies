import {users} from './users/data.json'
import {genres} from './movies/genres.json'
import {results} from './movies/movies.json'



const inicialState={
    id: 0,
    email: "",
    login:false,
    first_name: "",
    last_name: "",
    avatar: "",
    password: "",
    movies :[]

}

const inicialStateGenre={
    id: 0, name: ""
}
 const inicialMovie ={
    id:0,
    title:"",
    poster_path:""
 }

export const servicesLogin = (props) => {

    const email = props.email
    const password = props.password
     let user = users.find((e)=>(
        e.email===email && e.password===password
    ))

    if (user === undefined) 
    {return inicialState
    }else{
        return (user)
        
    }     
}

export const servicesGenre=(props)=>{
    try {
        // const inicialPage = props
        // const finalPage = props +5
        // let genresPages = []
        // for (let i=inicialPage;i<finalPage;i++){
        //     genresPages.push(genres[i])
        // }
        return (genres[props])
        
    } catch (error) {
        console.log(error)
    }
}

export const servicesCategory =(props)=>{
    let moviesGenres=[]
    results.find((e)=>{
        e.genre_ids.find(f=>{
            //console.log(f, props.id)
            if (f==props.id)moviesGenres.push(e)
        })
    })
    return(moviesGenres)
}

export const servicesMovie=(props)=>{
    const id = parseInt(props.id)   
    const result=results.find((e)=>{        
        return e.id==id
    })
    return result
}

//borrar 
export const getUser = () => {
    return async (dispatch) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            dispatch(getUsers(user))
        } catch (error) {
            console.log('error en getUser, desde redux', error);
        }
    }
}

export const logUser = (valores) => {
    return async (dispatch) => {
        try {
            console.log(valores)
            const email = valores.email
            const password = valores.password
            let user = users.find((e)=>(
                e.email===email && e.password===password
            ))
            if (user === undefined) 
                {
                    user = inicialState
                } 
            console.log('data desde redux', user)
            dispatch(addUser(data))
        } catch (error) {
            console.log('error en loginUser, desde redux', error);
        }
    }
}

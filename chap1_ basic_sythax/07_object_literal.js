//C'est un autre type d'objet
let user = {
    name:'Erick',
    age: 24,
    location:'DRC Congo',
    statusMariage:true,
    authers:'To add',
    blog:[
        {
            title:'Javascript pour les avances',
            Body:'lorem ipsum dolor machin machin',
            created: Date.now()
        },
        {
            title:'Javascript pour débutant',
            Body:'lorem ipsum dolor machin machin',
            created: Date.now()
        },
    ]
    
};
console.log(user);
//Affichege d'un attribut d'un Object
console.log(user.name);
console.log(user['age']);

console.log(user.location = 'Angola');//La reaffectation d'un attribut de l'oject
console.log(user['authers'] = 'DRC');
console.log(user);

let bloguer = {
    nom:'Erick',
    blogs:[
        {
            title:'Javascript pour les avances',
            Body:'lorem ipsum dolor machin machin',
            created: Date.now()
        },
        {
            title:'Javascript pour débutant',
            Body:'lorem ipsum dolor machin machin',
            created: Date.now()
        }, 
    ],
    afficherBlog(){ // Une méthode interne pour l'affichage de blog
        console.log('Ce bloguer a écrit ceci :');
        this.blogs.forEach(blog => { //(this) fais référence à la variable bloguer
            console.log(blog.title, blog.created, blog.Body);
        });
    }
    
};

console.log(bloguer.afficherBlog());
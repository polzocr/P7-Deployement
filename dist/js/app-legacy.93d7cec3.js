(function(){"use strict";var t={4282:function(t,e,s){s(6992),s(8674),s(9601),s(7727);var i=s(8935),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.connected()?i("div",{staticClass:"bodyPage"},[i("div",{attrs:{id:"sidemenu"}},[i("div",{staticClass:"sidemenu__nav"},[i("button",{staticClass:"sidemenu__btn",class:{active:t.navOpen},on:{blur:function(e){t.navOpen=!1},click:function(e){t.navOpen=!t.navOpen}}},[i("span",{staticClass:"top"}),i("span",{staticClass:"mid"}),i("span",{staticClass:"bottom"})]),i("div",{staticClass:"sidemenu__logo"},[i("router-link",{staticClass:"top__logo__img",attrs:{to:"/"}},[i("img",{attrs:{src:s(3649),alt:"icone-groupomania"}})])],1)]),i("transition",{attrs:{name:"translateX"}},[i("nav",{directives:[{name:"show",rawName:"v-show",value:t.navOpen,expression:"navOpen"}]},[i("div",{staticClass:"sidemenu__wrapper"},[i("div",{staticClass:"sidemenu__create"},[i("router-link",{staticClass:"sidemenu__create__link",attrs:{to:"/createpost"}},[i("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),i("p",[t._v("Créer un article")])])],1),i("div",{staticClass:"sidemenu__user"},[i("router-link",{staticClass:"sidemenu__user__link",attrs:{to:{name:"Profile",params:{id:this.$store.state.user.userId}}}},[i("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),i("p",[t._v("Votre profile")])]),t.isAdmin()?i("router-link",{staticClass:"sidemenu__user__link",attrs:{to:"/users"}},[i("i",{staticClass:"fa fa-lock",attrs:{"aria-hidden":"true"}}),i("p",[t._v("Page Admin")])]):t._e(),i("router-link",{staticClass:"sidemenu__user__link",attrs:{to:""},nativeOn:{click:function(e){return t.deconnexion()}}},[i("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),i("p",[t._v("Se Deconnecter")])])],1)])])])],1),i("router-view")],1):i("div",{staticClass:"login"},[i("div",{staticClass:"login__element"},[i("div",{staticClass:"login__element__nav"},[i("div",{staticClass:"navigation left",class:{active:t.loginPage()}},[i("router-link",{attrs:{to:"/login",id:"login--signup"}},[i("i",{staticClass:"fa fa-user-circle"}),t._v("Se connecter")])],1),i("div",{staticClass:"navigation",class:{active:t.signupPage()}},[i("router-link",{attrs:{to:"/signup",id:"login--signup"}},[i("i",{staticClass:"fa fa-list-alt",attrs:{"aria-hidden":"true"}}),t._v("S'inscrire")])],1)]),i("router-view")],1)])])},n=[],r={name:"App",data:function(){return{navOpen:!1}},computed:{},methods:{loginPage:function(){return"/login"==this.$route.path},signupPage:function(){return"/signup"==this.$route.path},connected:function(){var t=JSON.parse(localStorage.getItem("user"));return!(!t||this.$store.state.user.userId!=t.userId)},deconnexion:function(){this.$store.dispatch("deconnexion",{userId:-1,token:""}),this.$router.push("/login")},isAdmin:function(){var t=JSON.parse(localStorage.getItem("user"));return 1==t.userId}}},o=r,l=s(1001),u=(0,l.Z)(o,a,n,!1,null,null,null),c=u.exports,m=(s(8309),s(2809)),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("div",{staticClass:"scrollTop",class:{visibility:t.visible}},[s("button",{staticClass:"btn",on:{click:function(e){return t.topOrFeed()}}},[s("i",{staticClass:"fa fa-arrow-up",attrs:{"aria-hidden":"true"}})])]),t._l(t.postsReverse,(function(e,i){return s("PostComp",{key:i,attrs:{modify:t.modify,id:e.id,userId:e.userId,created_at:e.createdAt,user:e.User,title:e.name,text:e.text,image_url:e.image_url,nbComments:e.Comments,likes:e.Likes},on:{Commenting:t.CommentRequest,modify:t.getToPost}})}))],2)},p=[],f=(s(7042),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"home"},[s("section",{staticClass:"homePost"},[s("div",{staticClass:"homePost__title"},[t.user?s("p",{attrs:{id:"names"}},[t._v(t._s(t.user.firstName)+" "+t._s(t.user.lastName))]):t._e(),s("p",{attrs:{id:"post-title"}},[t._v(t._s(t.title))]),s("div",{attrs:{id:"delete__flexbox"}},[s("p",[t._v(t._s(t.date())+" ")]),t.ownPost()?s("div",{staticClass:"dropdown"},[t._m(0),s("div",{staticClass:"dropdown__content"},[s("button",{staticClass:"btn btn-delete",on:{click:function(e){e.preventDefault(),t.showModal=!0}}},[s("i",{staticClass:"fa fa-pen",attrs:{"aria-hidden":"true"}})]),s("button",{staticClass:"btn btn-delete",on:{click:function(e){return e.preventDefault(),t.DeleteRequest()}}},[s("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])])]):t._e()]),t.showModal?s("Modal",{attrs:{id:this.id,userId:this.userId,title:this.title,text:this.text,image_url:this.image_url},on:{close:function(e){t.showModal=!1}}}):t._e()],1),s("div",{staticClass:"homePost__text"},[s("p",[t._v(" "+t._s(t.text)+" ")])]),null!==this.image_url?s("div",{staticClass:"homePost__image"},[s("img",{attrs:{src:t.image_url,alt:"imagePost"}})]):t._e(),s("div",{staticClass:"homePost__footer"},[s("div",{staticClass:"homePost__footer__comment"},[s("i",{staticClass:"fa fa-comment btn-normal",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.showComments()}}}),t.nbComments?s("p",{attrs:{id:"nbComments"}},[t._v(t._s(t.nbComments.length))]):t._e()]),t.likes&&t.like()?s("div",{staticClass:"homePost__footer__like"},[s("div",{staticClass:"homePost__footer__like__like"},[s("i",{staticClass:"fa fa-thumbs-up",class:this.liked?"btn-like":"btn-unlike none",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.LikePostRequest(2)}}}),s("p",[t._v(" "+t._s(t.nbLikes()))])]),s("div",{staticClass:"homePost__footer__like__dislike"},[s("i",{staticClass:"fa fa-thumbs-down",class:this.liked?"btn-unlike none":"btn-like",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.LikePostRequest(0)}}}),s("p",[t._v(" "+t._s(t.nbDislikes()))])])]):t._e(),t.likes&&!t.like()?s("div",{staticClass:"homePost__footer__like"},[s("div",[s("i",{staticClass:"fa fa-thumbs-up btn-unlike liked",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.LikePostRequest(1)}}}),s("p",[t._v(t._s(t.nbLikes()))])]),s("div",[s("i",{staticClass:"fa fa-thumbs-down btn-unlike liked",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.LikePostRequest(-1)}}}),s("p",[t._v(t._s(t.nbDislikes()))])])]):t._e()]),s("div",{staticClass:"homePost__comment"},[s("div",{staticClass:"homePost__comment__input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.textComment,expression:"textComment"}],attrs:{id:"textComment",type:"text",placeholder:"Votre commentaire"},domProps:{value:t.textComment},on:{input:function(e){e.target.composing||(t.textComment=e.target.value)}}})]),s("div",{staticClass:"homePost__comment__button"},[s("button",{staticClass:"btn btn-comment",class:{disabled:t.isDisabled()},on:{click:function(e){return e.preventDefault(),t.CommentRequest()}}},[t._v("Commenter")])])]),t.showComment&&0!==t.nbComments.length?s("section",{staticClass:"commentsPage"},t._l(this.comments,(function(t,e){return s("CommentComp",{key:e,attrs:{firstName:t.UserFirstName,lastName:t.UserLastName,text:t.text,created_at:t.created_at}})})),1):t._e()])])}),h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-delete dropdown__icon"},[s("i",{staticClass:"fa fa-ellipsis-h",attrs:{"aria-hidden":"true"}})])}],_=(s(9653),s(1539),s(4747),s(4916),s(3123),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comments"},[s("div",{staticClass:"comments__title"},[s("p",{attrs:{id:"name"}},[t._v(t._s(t.firstName)+" "+t._s(t.lastName))]),s("p",{attrs:{id:"date"}},[t._v(t._s(t.date()))])]),s("div",{staticClass:"comments__text"},[s("p",[t._v(t._s(t.text)+" ")])])])}),v=[],g={name:"CommentComp",props:{firstName:{type:String},lastName:{type:String},text:{type:String},created_at:{type:String}},data:function(){return{exist:!1}},methods:{date:function(){if("undefined"!==typeof this.created_at){var t=this.created_at.split("T")[0],e=t.split("-")[2],s=t.split("-")[1],i=t.split("-")[0];return e+"/"+s+"/"+i}}},computed:{}},C=g,b=(0,l.Z)(C,_,v,!1,null,null,null),x=b.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal-transition"}},[s("div",{staticClass:"modal"},[s("form",{staticClass:"modal__box",attrs:{enctype:"multipart/form-data"}},[s("div",{staticClass:"modal__box__title"},[s("input",{attrs:{id:"title",type:"text"},domProps:{value:t.title}}),s("button",{staticClass:"btn btn-close",on:{click:function(e){return t.$emit("close")}}},[s("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"modal__box__text"},[s("textarea",{attrs:{id:"text",rows:"5",cols:"60"},domProps:{value:t.text}})]),null!==this.image_url?s("div",{staticClass:"modal__box__image"},[s("img",{attrs:{src:t.image_url,alt:"image_PutRequest"}})]):t._e(),s("div",{staticClass:"modal__box__file"},[s("label",{staticClass:"btn upload",attrs:{for:"upload"}},[t._v("Choisir un fichier")]),s("input",{ref:"fileInput",attrs:{id:"upload",type:"file",accept:"image/*",name:"image"},on:{change:function(e){return t.changeFile()}}})]),s("div",{staticClass:"modal__box__btn"},[s("button",{staticClass:"btn btn-modal",on:{click:function(e){return e.preventDefault(),t.ModifyRequest()}}},[t._v("Modifier")]),s("button",{staticClass:"btn btn-modal",on:{click:function(e){return e.preventDefault(),t.DeleteRequest()}}},[t._v("Supprimer")])])])])])},k=[],P=(s(6699),s(2023),s(7941),{name:"ModalComp",data:function(){return{getDisabled:!1,error:!1}},props:{id:{type:Number,required:!0,default:0},userId:{type:Number,required:!0,default:0},title:{type:String},text:{type:String},image_url:{type:String}},methods:{isDisabled:function(){var t=document.getElementById("title").value;return this.getDisabled=""==t},changeFile:function(){var t=this.$refs.fileInput.files[0],e={"image/jpg":"jpg","image/jpeg":"jpg","image/png":"png","image/gif":"gif"};Object.keys(e).includes(t.type)?(this.error=!1,this.file=t):(this.error=!0,alert("Uniquement les images et les gifs sont acceptés"))},ModifyRequest:function(){var t=JSON.parse(localStorage.getItem("user")),e=document.getElementById("title").value,s=document.getElementById("text").value,i={image:this.file,name:e,text:s,id:this.id};""!==e&&0==this.error?t.userId!==this.userId?this.$router.push("/login"):this.$store.dispatch("PutPostRequest",{data:i}):(document.getElementById("title").placeholder="Le titre est indispensable",alert("Uniquement les images et les gifs sont acceptés"))},DeleteRequest:function(){var t=JSON.parse(localStorage.getItem("user"));t.userId!==this.userId?this.$router.push("/login"):confirm("Vous-vous supprimer cet article ?")&&this.$store.dispatch("DeleteRequest",{id:this.id})}}}),N=P,w=(0,l.Z)(N,y,k,!1,null,null,null),I=w.exports,$=s(6166),q=s.n($),R={name:"PostComp",components:{CommentComp:x,Modal:I},props:{modify:{type:Boolean,default:function(){return!1}},clickable:{type:Boolean,default:function(){return!0}},id:{type:Number,required:!0,default:0},userId:{type:Number,required:!0,default:0},created_at:{type:String},nbComments:{type:Array},user:{type:Object},likes:{type:Array},title:{type:String},text:{type:String},image_url:{type:String}},data:function(){return{localName:this.title,localText:this.text,file:this.image_url,idPost:"",showComment:!1,textComment:"",comments:[{}],showModal:!1,liked:-1}},computed:{},created:function(){},methods:{nbLikes:function(){var t=0;return this.likes.forEach((function(e){1==e.stateLike&&(t+=1)})),t},nbDislikes:function(){var t=0;return this.likes.forEach((function(e){0==e.stateLike&&(t+=1)})),t},like:function(){var t=this,e=JSON.parse(localStorage.getItem("user")),s=!1;return 0!==this.likes.length&&(this.likes.forEach((function(i){i.userId==e.userId&&(t.liked=i.stateLike,s=!0)})),s)},LikePostRequest:function(t){-1==t||1==t?this.$store.dispatch("LikePostRequest",{id:this.id,like:t}):(2==t&&this.liked||0==t&&!this.liked)&&this.$store.dispatch("LikePostRequest",{id:this.id,like:0})},date:function(){if("undefined"!==typeof this.created_at){var t=this.created_at.split("T")[0],e=t.split("-")[2],s=t.split("-")[1],i=t.split("-")[0];return e+"/"+s+"/"+i}},CommentRequest:function(){""!==this.textComment&&this.$store.dispatch("CreateCommentRequest",{PostId:this.id,text:this.textComment})},isDisabled:function(){return""==this.textComment},showComments:function(){var t=this;if(0!==this.nbComments.length){this.comments=[{}];var e=JSON.parse(localStorage.getItem("user")),s=q().create({baseURL:"http://localhost:3000/"});s.defaults.headers.common["Authorization"]="Bearer "+e.token,s.get("/"+this.id+"/comments").then((function(e){e.data.forEach((function(e){t.comments.push({UserFirstName:e.User.firstName,UserLastName:e.User.lastName,text:e.text,created_at:e.createdAt})}))})).then((function(){t.showComment=!t.showComment})).catch((function(t){return console.log(t)})).catch((function(t){return console.log(t,"Insuccès de lappel des commentaires")}))}},ownPost:function(){var t=JSON.parse(localStorage.getItem("user"));return this.userId==t.userId},modifyComp:function(){var t=this.$route.params.id,e=this.id;return console.log("--------------------"),console.log("paramsId: "+t),console.log("id: "+e),t==e&&this.ownPost()?(console.log("true"),!0):void 0==t?(console.log("false"),!1):void console.log("REDIRIRECTION")},emitModify:function(){var t=document.getElementById("title").value,e=document.getElementById("text").value,s={image:this.file,title:t,text:e,id:this.$route.params.id};this.$emit("Modifying",{data:s})},changeFile:function(){this.file=this.$refs.fileInput.files[0]},emitDelete:function(){this.$store.dispatch("DeleteRequest",{id:this.id})},emitComment:function(){var t=document.getElementById("textComment").value;this.$emit("Commenting",{PostId:this.id,text:t})},DeleteRequest:function(){confirm("Vous-vous supprimer cet article ?")&&this.$store.dispatch("DeleteRequest",{id:this.id})},GetToPost:function(){this.$store.state.postUserId=this.userId,this.$router.push("/post/"+this.id)},ModifyRequest:function(){var t=document.getElementById("title").value,e=document.getElementById("text").value,s={image:this.file,title:t,text:e,id:this.$route.params.id};this.$store.dispatch("PutPostRequest",{data:s})}}},S=R,E=(0,l.Z)(S,f,h,!1,null,null,null),D=E.exports,L={name:"HomeView",components:{PostComp:D},data:function(){return{idLocal:this.$route.params.id,modify:!1,visible:!1}},beforeCreate:function(){this.$store.dispatch("GetPostsRequest")},created:function(){var t=this;window.addEventListener("scroll",(function(){window.scrollY>600?t.visible=!0:t.visible=!1}))},mounted:function(){},methods:{CreateRequest:function(){this.$store.dispatch()},CommentRequest:function(t){this.$store.dispatch("CreateCommentRequest",t)},getToPost:function(t){this.$router.push("/"+t.postId)},topOrFeed:function(){window.scrollTo(0,0)}},computed:{postsReverse:function(){return this.$store.state.posts.slice().reverse()}}},U=L,O=(0,l.Z)(U,d,p,!1,null,null,null),A=O.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"composant"},[s("form",{staticClass:"composant__form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.LoginRequest.apply(null,arguments)}}},[s("div",{staticClass:"form log"},[s("div",{staticClass:"form__input"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],attrs:{type:"email",name:"email",placeholder:"E-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form__input"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],attrs:{type:"password",name:"password",placeholder:"Mot de passe"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.haveError()?s("p",[t._v(" "+t._s(t.$store.state.error)+" ")]):t._e()]),s("div",{},[s("button",{staticClass:"btn form__button",class:{disabled:t.isDisabled()},attrs:{type:"submit"},on:{blur:function(e){return t.cleanStore()}}},["loading"==t.$store.state.status?s("span",[t._v("Connexion en cours...")]):s("span",[t._v("Se connecter")])])])])]),t._m(0)])},V=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:s(5515),alt:"logo-groupomania"}})])}],B={name:"LoginView",data:function(){return{email:"",password:""}},mounted:function(){},computed:{},methods:{haveError:function(){return!!this.$store.state.error},cleanStore:function(){this.$store.commit("clearError")},isDisabled:function(){return""==this.email||""==this.password},LoginRequest:function(){""!==this.email&&""!==this.password&&this.$store.dispatch("LoginRequest",{email:this.email,password:this.password})}}},M=B,F=(0,l.Z)(M,Z,V,!1,null,null,null),j=F.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"composant"},[s("form",{staticClass:"composant__form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.SignupRequest.apply(null,arguments)}}},[s("div",{staticClass:"form signup"},[s("div",{staticClass:"form__input"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.lastName,expression:"lastName",modifiers:{trim:!0}}],attrs:{type:"text",name:"lastName",placeholder:"Nom"},domProps:{value:t.lastName},on:{input:[function(e){e.target.composing||(t.lastName=e.target.value.trim())},function(e){return t.testLastName()}],blur:function(e){return t.$forceUpdate()}}}),t.errorLastName?s("p",{staticClass:"error"},[t._v(t._s(t.errorLastName))]):t._e()]),s("div",{staticClass:"form__input"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.firstName,expression:"firstName",modifiers:{trim:!0}}],attrs:{type:"text",name:"firstName",placeholder:"Prénom"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form__input"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],attrs:{type:"email",name:"email",placeholder:"E-mail"},domProps:{value:t.email},on:{input:[function(e){e.target.composing||(t.email=e.target.value.trim())},function(e){return t.testEmail()}],blur:function(e){return t.$forceUpdate()}}}),t.errorEmail?s("p",{staticClass:"error"},[t._v(t._s(t.errorEmail))]):t._e()]),s("div",{staticClass:"form__input"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],attrs:{type:"password",name:"password",placeholder:"Mot de passe"},domProps:{value:t.password},on:{input:[function(e){e.target.composing||(t.password=e.target.value.trim())},function(e){return t.testPassword()}],blur:function(e){return t.$forceUpdate()}}}),t.errorPassword?s("p",{staticClass:"error"},[t._v(t._s(t.errorPassword))]):t._e()]),s("div",{},[s("button",{staticClass:"btn form__button btn-signup",class:{disabled:t.isDisabled()},attrs:{type:"submit",disabled:t.isDisabled()}},["loading"==t.$store.state.status?s("span",[t._v("Création en cours...")]):s("span",[t._v("S'enregistrer")])]),t.errorValidation?s("p",{staticClass:"error"},[t._v(" "+t._s(t.errorValidation))]):t._e()])])]),t._m(0)])},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:s(5515),alt:"logo-groupomania"}})])}],z=(s(7601),{name:"SignupView",data:function(){return{firstName:"",lastName:"",email:"",password:"",errorLastName:"",errorEmail:"",errorPassword:"",errorValidation:""}},computed:{},mounted:function(){},methods:{testPassword:function(){var t=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;return t.test(this.password)?(this.errorPassword="",this.errorValidation="",!0):(this.errorPassword="Le mot de passe est trop simple",!1)},testEmail:function(){var t=/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(this.email)?(this.errorEmail="",this.errorValidation="",!0):(this.errorEmail="Ce n'est pas une email valide",!1)},testLastName:function(){var t=/^[ ',-\.A-Za-z\xE0-\xE5\xE7-\xEF\xF1-\xF6\xF9-\xFD\xFF\u0105\u0107\u010D\u0117\u0119\u012F\u0142\u0144\u016B\u0173\u017A\u017C]+$/;return t.test(this.lastName)?(this.errorLastName="",this.errorValidation="",!0):(this.errorLastName="Le nom doit être correct",!1)},isDisabled:function(){return""==this.lastName||""==this.email||""==this.password},SignupRequest:function(){this.testPassword()&&this.testEmail()&&this.testLastName()&&!this.isDisabled()?(this.errorValidation="",this.$store.dispatch("SignupRequest",{lastName:this.lastName,firstName:this.firstName,email:this.email,password:this.password})):this.errorValidation="Veuillez remplir correctement vos informations personnelles"}}}),G=z,H=(0,l.Z)(G,J,T,!1,null,null,null),X=H.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("section",{attrs:{id:"test"}},[s("form",{attrs:{enctype:"multipart/form-data"}},[s("div",[s("input",{attrs:{id:"name",type:"text"},domProps:{value:t.post.name}})]),s("div",[s("input",{attrs:{id:"text",type:"textarea"},domProps:{value:t.post.text}})]),s("div",[s("div",[s("img",{attrs:{src:t.post.image_url,alt:"image_PutRequest"}})]),s("div",[s("input",{ref:"fileInput",attrs:{type:"file",accept:"image/*",name:"image"},on:{change:function(e){return t.changeFile()}}})])]),s("div",[s("button",{on:{click:function(e){return e.preventDefault(),t.ModifyRequest()}}},[t._v("Modifier")])]),s("div",[s("button",{on:{click:function(e){return e.preventDefault(),t.DeleteRequest()}}},[t._v("Supprimer")])])])])])},K=[],Q=s(3019),W=s(4665),tt={name:"PostView",data:function(){return{modify:!1,newPost:{name:"",text:"",image_url:""}}},computed:(0,Q.Z)({},(0,W.rn)(["post"])),methods:{ownPost:function(){var t=JSON.parse(localStorage.getItem("user"));return this.post.userId==t.userId},modifier:function(){this.modify=!this.modify},ModifyRequest:function(){var t=document.getElementById("name").value,e=document.getElementById("text").value,s={image:this.file,name:t,text:e,id:this.$route.params.id};this.$store.dispatch("PutPostRequest",{data:s})},DeleteRequest:function(){confirm("Vous-vous supprimer cet article ?")&&this.$store.dispatch("DeleteRequest",{id:this.post.id})},changeFile:function(){this.file=this.$refs.fileInput.files[0],console.log(this.name),console.log(this.localName)},CommentRequest:function(t){this.$store.dispatch("CreateCommentRequest",t)}},beforeMount:function(){var t=JSON.parse(localStorage.getItem("user"));t.userId!==this.$store.state.postUserId?this.$router.push("/login"):this.$store.dispatch("GetPostRequest",this.$route.params.id)}},et=tt,st=(0,l.Z)(et,Y,K,!1,null,null,null),it=st.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"createPost"},[s("form",{staticClass:"createPost__form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.PostRequest.apply(null,arguments)}}},[s("div",{staticClass:"createPost__form__title"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Titre"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"createPost__form__text"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{rows:"5",cols:"60",placeholder:"Votre texte"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),s("div",{staticClass:"createPost__form__file"},[s("label",{staticClass:"btn upload",attrs:{for:"upload"}},[t._v("Choisir un fichier")]),s("input",{ref:"fileInput",attrs:{id:"upload",type:"file",accept:"image/*",name:"image"},on:{change:function(e){return t.changeFile()}}})]),s("div",{staticClass:"createPost__form__button"},[s("button",{staticClass:"btn",class:{disabled:t.isDisabled()},attrs:{type:"submit"}},[t._v("Créer votre article")])])])])},nt=[],rt={name:"CreateView",data:function(){return{title:"",text:"",file:"",error:!1}},methods:{changeFile:function(){var t=this.$refs.fileInput.files[0],e={"image/jpg":"jpg","image/jpeg":"jpg","image/png":"png","image/gif":"gif"};Object.keys(e).includes(t.type)?(this.error=!1,this.file=t):(this.error=!0,alert("Uniquement les images et les gifs sont acceptés"))},PostRequest:function(){var t={image:this.file,name:this.title,text:this.text,userId:this.$store.state.user.userId};this.isDisabled()||0!=this.error||this.$store.dispatch("PostPostRequest",{data:t})},isDisabled:function(){return""==this.title||1==this.error}},beforeCreate:function(){var t=JSON.parse(localStorage.getItem("user"));if(!t||this.$store.state.user.userId!==t.userId)return console.log(t),void this.$router.push("/login")}},ot=rt,lt=(0,l.Z)(ot,at,nt,!1,null,null,null),ut=lt.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"profilePage"},[t.modify?s("section",{staticClass:"profile"},[s("div",{staticClass:"profile__perso"},[t._m(0),s("div",{staticClass:"infos"},[s("div",{staticClass:"infos__name"},[s("p",[t._v(" "+t._s(t.lastName))]),s("p",[t._v(" "+t._s(t.firstName))])]),s("div",{staticClass:"infos__email"},[s("p",[t._v(" "+t._s(t.email))])]),s("div",{staticClass:"infos__button"},[s("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.ModifyUser()}}},[t._v("Modifier le profil")])])])]),s("div",{staticClass:"profile__content"},[s("div",{staticClass:"profile__content__posts"},[s("i",{staticClass:"fa fa-file-image",attrs:{"aria-hidden":"true"}}),s("p",[t._v(t._s(t.nbPosts)+" Posts")])]),s("div",{attrs:{id:"comments"}},[s("i",{staticClass:"fa fa-comment",attrs:{"aria-hidden":"true"}}),s("p",[t._v(t._s(t.nbComments)+" Commentaires")])]),s("div",{staticClass:"profile__content__likes"},[s("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}}),s("p",[t._v(t._s(t.nbLikes)+" Likes/Dislikes")])])])]):s("section",{staticClass:"profile"},[s("div",{staticClass:"profile__perso"},[t._m(1),s("div",{staticClass:"modify"},[s("div",{staticClass:"modify__name"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{id:"lastname",type:"text"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),s("div",{staticClass:"modify__email"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"modify__button"},[s("div",{staticClass:"modify__button__1"},[s("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.UpdateUserRequest()}}},[t._v("Valider")])]),s("div",{staticClass:"modify__button__2"},[s("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.DeleteUserRequest()}}},[t._v("Supprimer")])])])])]),s("div",{staticClass:"profile__content"},[s("div",{staticClass:"profile__content__posts"},[s("i",{staticClass:"fa fa-file-image",attrs:{"aria-hidden":"true"}}),s("p",[t._v(t._s(t.nbPosts)+" Posts")])]),s("div",{attrs:{id:"comments"}},[s("i",{staticClass:"fa fa-comment",attrs:{"aria-hidden":"true"}}),s("p",[t._v(t._s(t.nbComments)+" Commentaires")])]),s("div",{staticClass:"profile__content__likes"},[s("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}}),s("p",[t._v(t._s(t.nbLikes)+" Likes/Dislikes")])])])])])},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile__perso__icon"},[s("i",{staticClass:"fa fa-user-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile__perso__icon"},[s("i",{staticClass:"fa fa-user-circle",attrs:{"aria-hidden":"true"}})])}],dt={name:"ProfileView",data:function(){return{modify:!0,lastName:"",firstName:"",nbPosts:0,nbComments:0,nbLikes:0,email:""}},beforeCreate:function(){var t=this,e=JSON.parse(localStorage.getItem("user")),s=q().create({baseURL:"http://localhost:3000/"});s.defaults.headers.common["Authorization"]="Bearer "+e.token,e&&this.$store.state.user.userId==e.userId&&this.$route.params.id==e.userId?s.get("/user/"+this.$store.state.user.userId).then((function(e){t.lastName=e.data.lastName,t.firstName=e.data.firstName,t.email=e.data.email,t.nbPosts=e.data.posts.length,t.nbComments=e.data.comments.length,t.nbLikes=e.data.likes.length})).catch((function(t){return console.log(t)})):this.$router.push("/")},computed:{},methods:{ModifyUser:function(){this.modify=!1},testEmail:function(){var t=/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!!t.test(this.email)||(document.getElementById("email").value="L'email n'est pas valide!",!1)},nameExist:function(){return""!=this.lastName||(document.getElementById("lastname").placeholder="Votre nom est requis",document.getElementById("email").placeholder="Votre e-mail est requis",!1)},emailExist:function(){return""!=this.email||(document.getElementById("email").placeholder="Votre e-mail est requis",!1)},UpdateUserRequest:function(){var t=this;if(this.nameExist()&&this.emailExist()&&this.testEmail()){var e=JSON.parse(localStorage.getItem("user")),s=q().create({baseURL:"http://localhost:3000/"});s.defaults.headers.common["Authorization"]="Bearer "+e.token;var i=this.$store.state.user.userId;s.put("/user/"+i,{lastName:this.lastName,firstName:this.firstName,email:this.email}).then((function(e){console.log(e.data),t.$router.push("/").then((function(){t.$router.push("/profile/"+i)})).catch((function(t){return console.log({error:t})}))})).catch((function(t){return console.log(t)}))}},DeleteUserRequest:function(){var t=this.$route.params.id;this.$store.dispatch("DeleteUserRequest",t)}}},pt=dt,ft=(0,l.Z)(pt,ct,mt,!1,null,null,null),ht=ft.exports,_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("section",[s("div",{staticClass:"title"},[s("h1",[t._v("Page administrateur")]),s("p",[t._v(t._s(this.$store.state.users.length)+" utilisateurs")])]),t._l(this.$store.state.users,(function(t,e){return s("User",{key:e,attrs:{id:t.id,firstName:t.firstName,lastName:t.lastName,email:t.email}})}))],2)])},vt=[],gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"card"}},[s("div",{staticClass:"userCard"},[s("div",{staticClass:"userCard__infos"},[s("div",{staticClass:"userCard__infos__names"},[s("p",[t._v(t._s(t.lastName))]),s("p",[t._v(t._s(t.firstName))])]),s("div",{staticClass:"userCard__infos__email"},[s("p",[t._v(t._s(t.email))])])]),s("div",{staticClass:"userCard__buttons"},[s("button",{staticClass:"btn btn-admin",on:{click:function(e){return e.preventDefault(),t.ActivityUser()}}},[t._v("Activités")]),t.isAdmin()?t._e():s("button",{staticClass:"btn btn-admin",on:{click:function(e){return e.preventDefault(),t.DeleteUser()}}},[t._v("Supprimer")])])])])},Ct=[],bt={name:"UserComp",data:function(){return{}},props:{id:{type:Number},firstName:{type:String},lastName:{type:String},email:{type:String}},methods:{DeleteUser:function(){var t=this.id;this.$store.dispatch("DeleteUserRequest",t)},ActivityUser:function(){alert("Bientôt disponible !")},isAdmin:function(){return 1==this.id}}},xt=bt,yt=(0,l.Z)(xt,gt,Ct,!1,null,null,null),kt=yt.exports,Pt={name:"HomeView",components:{User:kt},data:function(){return{}},beforeCreate:function(){this.$store.dispatch("GetAllUsersRequest")}},Nt=Pt,wt=(0,l.Z)(Nt,_t,vt,!1,null,null,null),It=wt.exports,$t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},qt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("img",{attrs:{src:s(6715),alt:""}})])}],Rt={name:"NotFoundView"},St=Rt,Et=(0,l.Z)(St,$t,qt,!1,null,"7f175ba2",null),Dt=Et.exports,Lt=(s(8862),s(6166)["default"]);i.Z.use(W.ZP);var Ut=Lt.create({baseURL:"http://localhost:3000/"}),Ot=Lt.create({baseURL:"http://localhost:3000/",headers:{"Content-Type":"multipart/form-data"}}),At={userId:-1,token:""},Zt=localStorage.getItem("user");Zt?(Zt=JSON.parse(Zt),Ut.defaults.headers.common["Authorization"]="Bearer "+Zt.token,Ot.defaults.headers.common["Authorization"]="Bearer "+Zt.token):Zt=At;var Vt=new W.ZP.Store({state:{error:"",status:"",user:Zt,users:[{}],posts:[{}],post:{},comments:{},postIdComments:"",postUserId:"",postFirstName:"",postLastName:"",connected:!1},getters:{},mutations:{clearError:function(t){t.error=""},changeStatus:function(t,e){t.status=e},userLogin:function(t,e){Ut.defaults.headers.common["Authorization"]="Bearer "+e.token,Ot.defaults.headers.common["Authorization"]="Bearer "+e.token,t.user=e,localStorage.setItem("user",JSON.stringify(e))}},actions:{SignupRequest:function(t,e){t.commit("changeStatus","loading"),Ut.post("/signup",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password}).then((function(s){console.log("Inscription réussie",s),t.dispatch("LoginRequest",e),t.commit("changeStatus","created")})).catch((function(e){console.log("Inscription ratée",e),t.commit("changeStatus","error_signup")}))},LoginRequest:function(t,e){var s=this;t.commit("clearError"),t.commit("changeStatus","loading"),Ut.post("/login",{email:e.email,password:e.password}).then((function(e){console.log("Connexion réussie"),t.commit("changeStatus","logged"),t.commit("userLogin",e.data),Ft.push("/")})).catch((function(e){console.log("Inconnexion réussie",e),s.state.error=e.response.data.error,t.commit("changeStatus","error_login")}))},deconnexion:function(t,e){t.commit("userLogin",e),t.commit("changeStatus",""),localStorage.removeItem("user"),t.state.user=At},GetAllUsersRequest:function(t){Ut.get("/users").then((function(e){t.state.users=e.data})).catch((function(t){return console.log(t)}))},GetPostsRequest:function(t){Ut.get("/").then((function(e){t.state.posts=e.data})).catch((function(t){return console.log(t)}))},GetPostRequest:function(t,e){Ut.get("/"+e).then((function(e){t.state.post=e.data})).catch((function(t){return console.log(t)}))},PutPostRequest:function(t,e){Ot.put("/"+e.data.id,e.data).then((function(){return Ft.push("/createPost").then((function(){Ft.push("/")}))})).catch((function(t){return console.log(t,"yeah")}))},DeleteRequest:function(t,e){Ut.delete("/"+e.id).then((function(){return Ft.push("/createPost").then((function(){Ft.push("/")}))})).catch((function(t){return console.log(t)}))},PostPostRequest:function(t,e){Ut.post("/",e.data,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){return Ft.push("/")})).catch((function(t){return console.log(t)}))},DeleteUserRequest:function(t,e){Ut.delete("/user/"+e).then((function(){1==t.state.user.userId?Ft.push("/").then((function(){return Ft.push("/users")})).catch((function(t){return console.log(t)})):(localStorage.removeItem("user"),t.state.user=At,Ft.push("/login"))})).catch((function(t){return console.log(t)}))},CreateCommentRequest:function(t,e){Ut.post("/"+e.PostId+"/comment",{PostId:e.PostId,text:e.text}).then((function(){return Ft.push("/createPost").then((function(){Ft.push("/")}))})).catch((function(t){return console.log(t)}))},GetCommentsRequest:function(t,e){Ut.get("/"+e+"/comments").then((function(e){t.state.comments=e})).catch((function(t){return console.log(t,"Insuccès de lappel des commentaires")}))},LikePostRequest:function(t,e){Ut.post("/"+e.id+"/like",{like:e.like}).then((function(){Ft.push("/createpost").then((function(){Ft.push("/")}))})).catch((function(t){return console.log(t)}))}},modules:{}});i.Z.use(m.Z);var Bt=[{path:"/",name:"Home",component:A},{path:"/login",name:"Login",component:j},{path:"/signup",name:"Signup",component:X},{path:"/profile/:id",name:"Profile",component:ht,props:!0},{path:"/createpost",name:"Create",component:ut},{path:"/post/:id",name:"Post",component:it},{path:"/users",name:"Admin",component:It,beforeEnter:function(t,e,s){t.name,e.name;var i=JSON.parse(localStorage.getItem("user"));1!==i.userId?s("/"):s(!0)}},{path:"*",name:"All",component:Dt}],Mt=new m.Z({routes:Bt,mode:"history"});Mt.beforeEach((function(t,e,s){var i=Vt.state.user,a=JSON.parse(localStorage.getItem("user"));e.name,"Login"!==t.name&&"Signup"!==t.name?-1==i.userId?s("/login"):a&&i.userId==a.userId?s(!0):s("/login"):s(!a||"/")}));var Ft=Mt;i.Z.config.productionTip=!1,new i.Z({router:Ft,store:Vt,render:function(t){return t(c)}}).$mount("#app")},5515:function(t,e,s){t.exports=s.p+"img/black-logo.e2e5ae92.png"},3649:function(t,e,s){t.exports=s.p+"img/icon-white.7d488b0c.png"},6715:function(t,e,s){t.exports=s.p+"img/not-found.138fe649.jpg"}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,n){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],a=t[c][1],n=t[c][2];for(var o=!0,l=0;l<i.length;l++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[i,a,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/P7-Deployement/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,n,r=i[0],o=i[1],l=i[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(l)var c=l(s)}for(e&&e(i);u<r.length;u++)n=r[u],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(c)},i=self["webpackChunkvue_frontend"]=self["webpackChunkvue_frontend"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(4282)}));i=s.O(i)})();
//# sourceMappingURL=app-legacy.93d7cec3.js.map
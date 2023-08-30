/* ===================== start of course ========================== */
const gulp = require("gulp") ,
  concat = require("gulp-concat"),
  autoprefixer = require("autoprefixer"),
  postcss = require("gulp-postcss"),
// import gulp-sass module and specify it to sass compiler
  sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
 livereload = require("gulp-livereload"),
 sourcemaps = require("gulp-sourcemaps"),
 // it is used to make a code minify or compressed
 uglify = require("gulp-uglify") ,
 notify = require("gulp-notify") ,
 zip = require('gulp-zip');
// create first task using gulp
gulp.task("mohamed" , () =>{
    console.log("your first task in gulp") ;
})

// how to copy files from src to destination

gulp.task("copyFiles" , () =>{
   return  gulp.src("project/index.html")
    // it is used to execute the operation you want to do
    .pipe(gulp.dest("dist"))
})

// if you want to  move all files with .html
gulp.task("copyFiles" , () =>{
    return  gulp.src("project/*.html")
    // it is used to execute the operation you want to do
    .pipe(gulp.dest("dist"))
})


gulp.task("moveHtml" , ()=>{
 gulp.src("project/check.html")
.pipe(gulp.dest("dist/html"))
.pipe(notify({
    title : 'task completed'
}))
})
// if you want to  move all files with any extension

gulp.task("copyFiles" , () =>{
    return gulp.src("project/*.*")
    // it is used to execute the operation you want to do
    .pipe(gulp.dest("dist"))
})

// if you want to  move all specific files

gulp.task("copySpecificFiles" , () =>{
    return gulp.src(["project/index.html" , "project/about.css"])
   .pipe(gulp.dest("dist")) ;
})

//how to use first pulings (concat) .
// how to concat all these css file in one file

gulp.task("concatCssFiles" , () =>{
    return gulp.src("project/*.css")
    .pipe(concat("mainFile.css"))
    .pipe(gulp.dest("dist"))
    .pipe(livereload())
})

//concat all js files
gulp.task("collectJsFiles" , () =>{
return gulp.src("project/*.js")
    .pipe(concat("mainJs.js"))
    .pipe(gulp.dest("dist"))
    .pipe(livereload())
})


gulp.task("collectTwoJsFileOnly" , () =>{
return gulp.src(["project/index.js" , "project/abut.js"])
   .pipe(concat("main.js"))
   .pipe(gulp.dest("dist")) ;
})

// how to use autoprefixer pulings
gulp.task("css" , () =>{
    // to use autoprefixer we should use postcss with i..!
    const plugins = [autoprefixer()] ;
 return gulp.src("project/signIn.css")
 .pipe(gulp-sourcemaps.init())
 .pipe(postcss(plugins))
 .pipe(concat("prefixCss.css"))
 .pipe(gulp-sourcemaps.write())
 .pipe(gulp.dest("dist"))
   .pipe(livereload())
})

// how to use gulp-sass plugins
gulp.task("sassCode" , () =>{
    const plugins = [autoprefixer()] ;
   return gulp.src("project/css/main.scss")
   .pipe(sass())
   .pipe(postcss(plugins))
   .pipe(concat("test.css"))
   .pipe(gulp.dest("dist"))
})

// how to use gulp-sass plugins again
gulp.task("scss" , () =>{
    const plugins = [autoprefixer()] ;
 return gulp.src("Test/css/main.scss")
  .pipe(sass({ outputStyle: "compressed" }))
  .pipe(postcss(plugins)
  .pipe(concat("apply.css")))
  .pipe(gulp.dest("dist")) ;
})

// how to use gulp-pug plugins
gulp.task("pug" , () =>{
     require("./server.js")
    return gulp.src("project/*.pug")
    // pretty : true make code did not compression
    .pipe(pug({pretty : true}))
    .pipe(gulp.dest("dist"))
})

//
gulp.task("mergeCss" , () =>{
  gulp.src("project/css/**/*.scss")
   .pipe(gulp-sourcemaps.init())
.pipe(concat("simple.css"))
 .pipe(gulp-sourcemaps.write())
.pipe(gulp.dest("dist"))
})
gulp.task("htmlCode", () => {
    return gulp.src("project/check.html")
        .pipe(gulp.dest("dist/html"))
        .pipe(notify({
            title: 'HTML task completed'
        }));
});
// not in watch gulp.series(" here we write the name of task like htmlCode || watch || jsCode يعني الاسم اللي كاتبينه لل task")

// watch task
gulp.task("watch", () => {
    require("./server.js")
    gulp.watch("project/check.html" , gulp.series("htmlCode"))
    gulp.watch("project/css/**/*.scss", gulp.series("scss"));
   gulp.watch("project/index.pug" , gulp.series("pug"))
   gulp.watch("project/css/**/*.scss" , gulp.series("scss"))
   gulp.watch("project/js/*.js" , gulp.series("js")) ;
});

// Default task
gulp.task("default", gulp.series("watch"));

gulp.task("jsCode" , () =>{
    return gulp.src("project/js/*.js")
    .pipe(concat("allJsCode.js"))
    .pipe(uglify())
    .pipe(gulp.dest("js"))
})


gulp.task("thirdWatch" , () =>{
    require("./server.js") ;
gulp.watch("project/index.pug" , gulp.series("pug"))
livereload.listen() ;
})
 // compress task
gulp.task("zip" , () =>{
    return gulp.src("dist/**/*.*")
    .pipe(zip("compressed.zip"))
    // make the file in thr gulp-tutorial
    .pipe(gulp.dest("."))
    .pipe(notify({
      title : "compression done..!"
    }))
  })

   gulp.task("watchTask" , () =>{
      gulp.watch("dist/**/*.*" , gulp.series("zip"))
   })
// this make a default task when we write only gulp without writing anything another it will make watchTask as a default and will implement it
   gulp.task("default" , gulp.series("watchTask"))


   /* =================  end of course ========================== */

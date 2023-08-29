const gulp = require("gulp")  ;
 const concat = require("gulp-concat") ;
 const autoprefixer = require("autoprefixer");
 const postcss = require("gulp-postcss") ;
// import gulp-sass module and specify it to sass compiler
 const sass = require("gulp-sass")(require("sass"));
 const pug = require("gulp-pug") ;

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
    .pipe(gulp.dest("dist"));
})

//concat all js files
gulp.task("collectJsFiles" , () =>{
return gulp.src("project/*.js")
    .pipe(concat("mainJs.js"))
    .pipe(gulp.dest("dist")) ;
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
 .pipe(postcss(plugins))
 .pipe(concat("prefixCss.css"))
 .pipe(gulp.dest("dist"))
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
const gulp = require("gulp") ;
const concat = require("gulp-concat") ;
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

gulp.task("copyFiles" , () =>{
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
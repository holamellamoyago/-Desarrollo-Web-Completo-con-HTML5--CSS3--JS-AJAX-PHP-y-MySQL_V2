
const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')

function css(done){
    src('src/scss/**/*.scss')    //Identificar el archivos de SASS
    .pipe( plumber())
    .pipe( sass() )     //Compilar 
    .pipe( dest('build/css') )     //Almacenar en el disco duro 

    done() //Callback quye avisa a gulp cuando llegamos al final. 
}

function dev(done){
    watch('src/scss/**/*.scss', css)

    done()
}


exports.css = css
exports.dev = dev








(stark  is root directory for creating this program)


( all command run on terminal at root(stark) directory where myapp.js (server) has been kept)
1.>   npm init                              ( it will ask author name , keywords, license etc and finally create a package.json of program)
2.>   npm i nexe -g 
3.>   nexe myapp.js -r "public/**/*.html"   (mentioned all directory which are kept along with myapp.js )
4.>   nexe --build
5.>   nexe -t x86-8.0.0                     (here i have mention target platform)

 automatically a "myapp" exe application generated in root(stark) directory

directory structure :
 
 stark___ 
         |__ Read_me.txt    (this is file which you are reading currently)
         |__ node_modules       (automatic generate while installing npm modules)
         |__myapp.js             ( This is server , this is my coding )
         |__package-lock.json   (automatic generate while installing npm modules)
         |__ public             (i created this folder like hosting sites this is root for server)
                  |__  Bootstrap (folder)
                  |__  Uploads   ( folder where all uploaded files resides)
                  |__  index.html
                  |__  vivek.php 

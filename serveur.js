function commencer() {
    var http = require("http");
        function serve(res,req){

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="email" placeholder="Entrer votre adresse email"><br>');
        res.write('<input type="password" placeholder="Votre mots de passe"><br>');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit" value="Enregistre">');
        res.write('</form>');
        req.end();
}
http.createServer(serve).listen(4545);
}
exports.nom =commencer;






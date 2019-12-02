// This is the default page for domain.com/
exports.RamanIndex = async function(request, response){

    // Data for retail stores drop-down. The empty string is so 
    // none are selected at the start.
    response.render('Home/RamanView', {name: "Raman"})
};
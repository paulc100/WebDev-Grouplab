// This is the default page for domain.com/
exports.YangIndex = async function(request, response){

    // Data for retail stores drop-down. The empty string is so 
    // none are selected at the start.
    response.render('Home/YangView', {name: "Yang"})
};
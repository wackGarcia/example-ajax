$(document).ready(function(){

    
    /**
     * Charge data from service usersrandom
     * @param {* Object} resp 
     */
    var success = (resp) => {
        setTimeout(function(){
            resp.results.map((item, index) => {
                if (index % 4 == 0) $(".container").append(`<div class="columns" id=${idColums = `colims-${index}`}></div>`);
                $(`#${idColums}`).append(`
                    <div class="column">
                        <div class="card box">
                            <div class="card-image"><figure class="image is-3by3"><img src="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-1300x500.jpeg" alt="Placeholder image"></figure></div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left"><figure class="image is-48x48"><img src="${item.picture.large}" alt="Placeholder image"></figure></div>
                                    <div class="media-content">
                                        <p class="title is-4">${item.name.title} ${item.name.first}</p>
                                        <p class="subtitle is-6">@${item.login.username}</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <span class="icon has-text-success"><i class="fas fa-check-square"></i></span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.
                                    <br><br>
                                    <time datetime="2016-1-1">${item.registered.date} </time>
                                    <br><br>
                                    <div class="has-text-centered">
                                        <a class="button is-big" id="btm" onclick="openData(${index})">Show note</a>
                                    </div>
                                </div>
                                <div class="loader-wrapper" id="loading-${index}">
                                    <div class="loader is-loading"></div>
                                </div>
                            </div>
                        </div>
                    </div>`);
            });

            $("#loading-general").removeClass('is-active');
        }, 800);    
    };

    /**
     * Active loaging before charge data from service
     */
    var beforeSend = () => {
        $("#loading-general").addClass('is-active');
    };

    /**
     * Exec ajax to get data users
     */
    (getData = () => {
        $.ajax({
            beforeSend: beforeSend,
            url: url,
            success: success,
            type: 'GET',
            error: function (jqHXR, estado, error) {
              alert("Error: show error for the user");
            }
        })
    })();


    /**
     * Close modal with class .modal
     */
    $('.modal-close').on('click', function(){
        $('.modal').removeClass('is-active');
    });
});

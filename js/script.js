//$(document).ready(function() {
    //     document.getElementById('pro-image').addEventListener('change', readImage, false);
    //     console.log(this.width)
    //     $( ".preview-images-zone" ).sortable();
        
    //     $(document).on('click', '.image-cancel', function() {
    //         let no = $(this).data('no');
    //         $(".preview-image.preview-show-"+no).remove();
    //     });
    // });
    
    
    
    // var num = 4;
    // function readImage() {
    //     if (window.File && window.FileList && window.FileReader) {
    //         var files = event.target.files;
    //         var output = $(".preview-images-zone");
    
    //         for (let i = 0; i < files.length; i++) {
    //             var file = files[i];
           
    //             if (!file.type.match('image')){
    //                  continue;
    //             }
    //             var picReader = new FileReader();
                
    //             picReader.addEventListener('load', function (event) {
    //                 var picFile = event.target;
                    
    //                 var html =  '<div class="preview-image preview-show-' + num + '">' +
    //                             '<div class="image-cancel" data-no="' + num + '">x</div>' +
    //                             '<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>' +
    //                             '<div class="tools-edit-image"><a href="javascript:void(0)" data-no="' + num + '" class="btn btn-light btn-edit-image"  data-toggle="modal" data-target="#myModal">edit</a></div>' +
    //                             '</div>';
    
    //                 output.append(html);
                   
    //                 num = num + 1;
    //             });
    
    //             picReader.readAsDataURL(file);
    //         }
    //         $("#pro-image").val('');
    //     } else {
    //         console.log('Browser not support');
    //     }
    // }
    
    $(document).ready(function(){
    var _URL = window.URL || window.webkitURL;
    
    $("#file").change(function(e) {
        var file, img,actualWidth,actualHeight;
        var obj1 ={};
    
        if ((file = this.files[0])) {
            img = new Image();
            img.onload = function() {
                 actualWidth = this.width ;
                 actualHeight = this.height;
                 obj1= convertToInches(actualWidth,actualHeight,76);
                 
            };
    
            img.onerror = function() {
                alert( "not a valid file: " + file.type);
            };
            img.src = _URL.createObjectURL(file);
            loadImage(
            e.target.files[0],
            function (img) {
                
                document.getElementById('preview').appendChild(img);
            },
            {maxWidth: 300} // Options
        );
    
        }
        function convertToInches(a,b,c){
            
            this.w=a/c;
            this.h =b/c;
            console.log(w+"X"+h)
            return {
                wInch : w,
                hInch : h
            }
        }
    
    });
    
    
    
    
    });
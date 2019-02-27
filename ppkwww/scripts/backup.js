
var Application = {
    initApplication : function(){
		    // $(window).load('pageinit', '#ListBerita', function(){
        //
        // });
        $("#submit").click(function(){
            LaporanCollection.addLaporan();
            $.mobile.changePage('#Result',{
              transition: "pop",
            });
        });
        $('#btn_add').click(function () {
          $.mobile.changePage('#FormLaporan',{
            transition: "pop",
          });
        });
        $('#btn_back').click(function () {
          $.mobile.changePage('#ListBerita',{
            transition: "pop",
          });
        });
        $('#ListBerita').on( "pageshow", function() {
          LaporanCollection.getAllLaporan();
        });
    },
}

var LaporanCollection = {
    getAllLaporan: function () {
      //$("#list-berita").empty();
        $.ajax({
           url:'http://localhost:80/ProjectPPK/index.php/laporan_c/get',
           type: 'get',
           dataType: 'json',
           cache:true,
           success: function (data) {
             console.log(data);
             $("#list-berita").empty();
                $.each(data, function (key, dataObject) {
                   var AppendList = '<div class="ui-body ui-body-a ui-corner-all">' +
                       '<h3>' + dataObject.judul + '</h3>' +
                       '<p>'+dataObject.tanggal+' | '+dataObject.jam+'</p>' +
                       '<hr />' +
                       '<p>Oleh <a href="' + dataObject.nohp_author + '">' + dataObject.nama_author + '</a></p>' +
                       '<img src="http://localhost:80/ProjectPPK/asset/image/'+dataObject.lampiran+'" alt="">'+
                       '<p>' + dataObject.keterangan + '</p>' +
                       '</div>';
                   $('#list-berita').append(AppendList);
                });
           },
           error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
           }
        });
    },

    addLaporan : function(){
      var d = new Date();
      var judul = $("#judul_in").val();
      var kategori = $("#kategori_in").val();
      var keterangan = $("#keterangan_in").val();
      var tanggal = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
      var jam = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
      var nama_author = $("#nama_in").val();
      var nohp_author = $("#nohp_author_in").val();

      $.ajax({
        url:"http://localhost:80/ProjectPPK/index.php/laporan_c/do_upload/",
        type:"POST",
        data:new FormData($("#formdt")[0]),
        processData: false,
        contentType: false,
        enctype:"multipart/form-data",
        success:function (e) {
          console.log(e);
          var namafile=e;
          $.ajax({
             url:'http://localhost:80/ProjectPPK/index.php/laporan_c/add/',
             type: 'POST',
             method:'POST',
             data:{
               judul:judul,
               kategori:kategori,
               keterangan:keterangan,
               tanggal : tanggal,
               jam : jam,
               lampiran:namafile,
               nama_author:nama_author,
               nohp_author:nohp_author
             },
             dataType:'jsonp',
             success: function (data) {
               console.log(data);
               // var html='<div class="ui-corner-all custom-corners">'+
               //              '<div class="ui-bar ui-bar-a">'+
               //              '<h3>Sukses</h3>'+
               //            '</div>'+
               //            '<div class="ui-body ui-body-a">'+
               //                '<p>Laporan berhasil dibbuat</p>'+
               //            '</div>'+
               //            '<button class="ui-shadow ui-btn ui-corner-all" id="btn_back">Back to home</button>'+
               //            '</div>';
               // $('#isi_result').append(html);
             }
           });
             }
             // error: function(xhr, resp, text) {
             //  console.log(xhr, resp, text);
             // }
          });
          $.ajax({
             url:'https://script.google.com/macros/s/AKfycbwtT87m9oBbqQNV71GdKUZmj3Ldam3dOGpjYOAD/exec',
             type: 'POST',
             method:'POST',
             data:{
               judul:judul,
               kategori:kategori,
               keterangan:keterangan,
               tanggal : tanggal,
               jam : jam,
               nama_author:nama_author,
               nohp_author:nohp_author,
               imgurl:'https://www.google.co.id/'
             },
             success: function (data) {
               console.log(data);
             }
             // error: function(xhr, resp, text) {
             //  console.log(xhr, resp, text);
             // }
           });
    }
}

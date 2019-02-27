var Application = {
    initApplication : function(){
		    // $(window).load('pageinit', '#ListBerita', function(){
        //
        // });
        var id=-1;
        $(document).on('click', '#submit',function(){
            LaporanCollection.addLaporan();
            if (('#issukses').length!=0) {
              $.mobile.changePage('#Result1',{
                transition: "pop",
              });
            }else{
              $.mobile.changePage('#Result2',{
                transition: "pop",
              });
            }
        });
        $('#btn_add').click(function () {
          $.mobile.changePage('#FormLaporan',{
            transition: "pop",
          });
        });
        $(document).on('click', '#btn_home',function () {
          $.mobile.changePage('#ListLaporan',{
            transition: "pop",
          });
        });
        $(document).on('click', '#btn_back',function () {
          $.mobile.changePage('#ListLaporan',{
            transition: "pop",
          });
        });
        $(document).on( "pagebeforeshow","#ListLaporan", function() {
          LaporanCollection.getAllLaporan();
        });

        $(document).on( "pagebeforeshow",'#DetailLaporan', function() {
          if(id==-1){
            $.mobile.changePage('#ListLaporan',{
              transition: "pop",
            });
          }else{
            LaporanCollection.getLaporan(id);
          }
        });

        $(document).on('click', '#detail-laporan', function(){
    			id = $(this).data('idlaporan');
    			//LaporanCollection.getLaporan(id);
    		});

        $(document).on('click change',"input[name='kategori_radio']",function(){
            var radioValue = $("input[name='kategori_radio']:checked").val();
            if (radioValue=="off") {
              LaporanCollection.getAllLaporan();
            }else {
              LaporanCollection.getLaporanFilter(radioValue);
            }
        });
    },

    generate_token : function(length){
      //edit the token allowed characters
      var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
      var b = [];
      for (var i=0; i<length; i++) {
          var j = (Math.random() * (a.length-1)).toFixed(0);
          b[i] = a[j];
      }
      return b.join("");
  }
}

var LaporanCollection = {
    getAllLaporan: function () {
      $("#list-laporan").empty();
        $.ajax({
           url:'http://localhost/ProjectPPK/index.php/laporan_c/get',
           type: 'get',
           dataType: 'json',
           cache:true,
           success: function (data) {
             console.log(data);
             $("#list-berita").empty();
                $.each(data, function (key, dataObject) {
                   if (dataObject.confirm==1) {
                     var AppendList = '<li class="ui-first-child ui-last-child">' +
                         '<a href="#DetailLaporan?id='+dataObject.id+'" target="_self" id="detail-laporan" data-idlaporan="'+dataObject.id+'" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
                         '<h3>' + dataObject.judul.toUpperCase() + ' <span class="ui-btn ui-shadow ui-corner-all ui-icon-check ui-btn-icon-notext ui-btn-inline"></span></h3>' +
                         '<p>'+dataObject.tanggal+' | '+dataObject.jam+'</p>' +
                         '<hr>' +
                         '<p>Kategori : ' + dataObject.kategori + '</p>' +
                         '<p>' + dataObject.keterangan + '</p>' +
                         '</a>'+
                         '</li>';
                   }else{
                     var AppendList = '<li class="ui-first-child ui-last-child">' +
                         '<a href="#DetailLaporan?id='+dataObject.id+'" target="_self" id="detail-laporan" data-idlaporan="'+dataObject.id+'" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
                         '<h3>' + dataObject.judul.toUpperCase() + '</h3>' +
                         '<p>'+dataObject.tanggal+' | '+dataObject.jam+'</p>' +
                         '<hr>' +
                         '<p>Kategori : ' + dataObject.kategori + '</p>' +
                         '<p>' + dataObject.keterangan + '</p>' +
                         '</a>'+
                         '</li>';
                   }
                   $('#list-laporan').append(AppendList);
                   //$('#list-laporan').listview('refresh');
                });
           },
           error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
           }
        });
    },

    getLaporanFilter: function (kategori) {
      console.log(kategori);
      $("#list-laporan").empty();
        $.ajax({
           url:'http://localhost/ProjectPPK/index.php/laporan_c/get',
           type: 'get',
           dataType: 'json',
           cache:true,
           success: function (data) {
             console.log(data);
             $("#list-berita").empty();
                $.each(data, function (key, dataObject) {
                   if (dataObject.kategori==kategori) {
                     if (dataObject.confirm==1) {
                       var AppendList = '<li class="ui-first-child ui-last-child">' +
                           '<a href="#DetailLaporan?id='+dataObject.id+'" target="_self" id="detail-laporan" data-idlaporan="'+dataObject.id+'" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
                           '<h3>' + dataObject.judul.toUpperCase() + ' <span class="ui-btn ui-shadow ui-corner-all ui-icon-check ui-btn-icon-notext ui-btn-inline"></span></h3>' +
                           '<p>'+dataObject.tanggal+' | '+dataObject.jam+'</p>' +
                           '<hr>' +
                           '<p>Kategori : ' + dataObject.kategori + '</p>' +
                           '<p>' + dataObject.keterangan + '</p>' +
                           '</a>'+
                           '</li>';
                     }else{
                       var AppendList = '<li class="ui-first-child ui-last-child">' +
                           '<a href="#DetailLaporan?id='+dataObject.id+'" target="_self" id="detail-laporan" data-idlaporan="'+dataObject.id+'" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
                           '<h3>' + dataObject.judul.toUpperCase() + '</h3>' +
                           '<p>'+dataObject.tanggal+' | '+dataObject.jam+'</p>' +
                           '<hr>' +
                           '<p>Kategori : ' + dataObject.kategori + '</p>' +
                           '<p>' + dataObject.keterangan + '</p>' +
                           '</a>'+
                           '</li>';
                     }
                   }
                   $('#list-laporan').append(AppendList);
                   //$('#list-laporan').listview('refresh');
                });
           },
           error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
           }
        });
    },

    getLaporan: function (id) {
      console.log(id);
      $("#detail_laporan").empty();
        $.ajax({
           url:'http://localhost/ProjectPPK/index.php/laporan_c/getbyid/'+id,
           type: 'get',
           dataType: 'json',
           cache:true,
           success: function (dataObject) {

             var AppendList = '<div class="ui-body ui-body-a ui-corner-all">' +
                 '<h3>' + dataObject.judul + '</h3>' +
                 '<p>'+dataObject.tanggal+' | '+dataObject.jam+'</p>' +
                 '<hr />' +
                 '<p>Oleh <a href="' + dataObject.nohp_author + '">' + dataObject.nama_author + '</a></p>' +
                 '<img src="http://localhost:80/ProjectPPK/asset/image/'+dataObject.lampiran+'" alt="" style="width:100%">'+
                 '<p>' + dataObject.keterangan + '</p>' +
                 '</div>';
             $('#detail_laporan').append(AppendList);
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
      var emailto="";
      var confirm=false;
      var token=Application.generate_token(32);

      if (kategori=="kriminal") {
        emailto="edoergi@gmail.com";
      }else if (kategori=="bencana alam") {
        emailto="mhmmdfadel01@gmail.com";
      }else if (kategori=="kecelakaan") {
        emailto="iqbalsetya98@gmail.com";
      }

      $.ajax({
        url:"http://localhost/ProjectPPK/index.php/laporan_c/do_upload/",
        type:"POST",
        data:new FormData($("#formdt")[0]),
        processData: false,
        contentType: false,
        enctype:"multipart/form-data",
        success:function (e) {
          console.log(e);
          var namafile=e;
          $.ajax({
             url:'http://localhost/ProjectPPK/index.php/laporan_c/add/',
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
               nohp_author:nohp_author,
               confirm:confirm,
               token:token
             },
             dataType:'jsonp',
             success: function (data) {
               console.log(data);
               ('#sukses_result').append("<span id='issukses' type='hidden'>sukses<>")
               }
             });
           }
          });
          $.ajax({
             url:'https://script.google.com/macros/s/AKfycbwtT87m9oBbqQNV71GdKUZmj3Ldam3dOGpjYOAD/exec',
             type: 'POST',
             method:'POST',
             data:{
               emailto:emailto,
               judul:judul,
               kategori:kategori,
               keterangan:keterangan,
               tanggal : tanggal,
               jam : jam,
               nama_author:nama_author,
               nohp_author:nohp_author,
               imgurl:'http://localhost/ProjectPPK/index.php/laporan_c/confirm/'+token
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

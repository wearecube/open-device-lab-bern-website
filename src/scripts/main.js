(function ($, window, document, undefined) {

  'use strict';

  $(function () {
  	var deviceData = [
      // Use http://screensiz.es/phone for deviceData
      // {
      //   "device":"Apple iPhone 3",
      //   "model_number":"",
      //   "os_version":"",
      //   "serial_number":"",
      //   "imei":"",
      //   "screensize":"",
      //   "pixel_ratio":"",
      //   "resolution":"",
      //   "donator":"Daniel Ehrensperger"
      // },
  		  {
  		    "device":"Apple iPod",
  		    "model_number":"MC086BT",
  		    "os_version":"4.2",
  		    "serial_number":"9C938L0Y75J",
  		    "imei":"",
  		    "screensize":"356x320",
  		    "pixel_ratio":"X1",
  		    "resolution":"",
  		    "donator":""
  		  },
        {
          "device":"Apple iPhone 4",
          "model_number":"MC606FD/A",
          "os_version":"7.1.2",
          "serial_number":"JF1281FHE00",
          "imei":"01 283800 604133 8",
          "screensize":"372x320",
          "pixel_ratio":"X2",
          "resolution":"",
          "donator":"Marcel Groner"
        },
  		  {
  		    "device":"Apple iPhone 4s",
  		    "model_number":"MD245FD/A",
  		    "os_version":"9.3.5",
  		    "serial_number":"DNQGM1G7DTDF",
  		    "imei":"01 300500 807237 7",
  		    "screensize":"372x320",
  		    "pixel_ratio":"X2",
  		    "resolution":"",
  		    "donator":"Joshua Schär"
  		  },
        {
          "device":"Apple iPhone 6",
          "model_number":"MG472ZD/A",
          "os_version":"9.0.1",
          "serial_number":"C36NXAP4G5MN",
          "imei":"35 695806 841035 5",
          "screensize":"559x375",
          "pixel_ratio":"X2",
          "resolution":"",
          "donator":"We Are Cube"
        },
        {
          "device":"Apple iPad 1",
          "model_number":"MC497FD",
          "os_version":"5.1.1",
          "serial_number":"GB036K1HETV",
          "imei":"",
          "screensize":"768x1024",
          "pixel_ratio":"X1",
          "resolution":"",
          "donator":"Daniel Ehrensperger"
        },
        {
          "device":"Apple iPad Air",
          "model_number":"MGL12NF/A",
          "os_version":"9.0.1",
          "serial_number":"DMPNV99FG5VJ",
          "imei":"",
          "screensize":"768x1024",
          "pixel_ratio":"X2",
          "resolution":"",
          "donator":"We Are Cube"
        },
  		  {
  		    "device":"Sony Xperia T3",
  		    "model_number":"D5103",
  		    "os_version":"4.4.2",
  		    "serial_number":"",
  		    "imei":"35 480506 089212 6",
  		    "screensize":"360x567",
  		    "pixel_ratio":"X2",
  		    "resolution":"190-199",
  		    "donator":"Stefan Reber"
  		  },
  		  {
  		    "device":"Nokia Lumnia 635",
  		    "model_number":"RM-974_1099",
  		    "os_version":"Windows Phone 8.1",
  		    "serial_number":"",
  		    "imei":"35 365206 1573300 09",
  		    "screensize":"357x542",
  		    "pixel_ratio":"X1.344",
  		    "resolution":"120-129",
  		    "donator":"Stefan Reber"
  		  },
  		  {
  		    "device":"Samsung Galaxy S2 Plus",
  		    "model_number":"GT-l9105P",
  		    "os_version":"4.2.2",
  		    "serial_number":"",
  		    "imei":"",
  		    "screensize":"320x508px",
  		    "pixel_ratio":"X1.5",
  		    "resolution":"",
  		    "donator":"Puzzle ITC GmbH"
  		  },
  		  {
  		    "device":"Samsung Galayx Tab",
  		    "model_number":"GT-P1000",
  		    "os_version":"2.2",
  		    "serial_number":"",
  		    "imei":"49 990106 40000",
  		    "screensize":"591x400",
  		    "pixel_ratio":"X1.5",
  		    "resolution":"",
  		    "donator":"Daniel Ehrensperger"
  		  },
  		  {
  		    "device":"Samsung Galayx Tab",
  		    "model_number":"GT-P7510",
  		    "os_version":"4.0.4",
  		    "serial_number":"",
  		    "imei":"49 990106 40000",
  		    "screensize":"800x1280",
  		    "pixel_ratio":"x1",
  		    "resolution":"800x1280",
  		    "donator":"Pierre Fritsch"
  		  },
        {
          "device":"Samsung Galaxy S5",
          "model_number":"SM-G900F",
          "os_version":"5.0",
          "serial_number":"R58FC106AAm",
          "imei":"35 774906 174691 4/01",
          "screensize":"615x360",
          "pixel_ratio":"X3",
          "resolution":"280-289",
          "donator":"Puzzle ITC GmbH"
        },
        {
          "device":"Samsung Galaxy S5",
          "model_number":"SM-G900F",
          "os_version":"6.0.1",
          "serial_number":"",
          "imei":"",
          "screensize":"615x360",
          "pixel_ratio":"X3",
          "resolution":"280-289",
          "donator":""
        },
  		  {
  		    "device":"HTC",
  		    "model_number":"One X+",
  		    "os_version":"4.2.2",
  		    "serial_number":"FA2B9W108352",
  		    "imei":"35 356705 112970 9",
  		    "screensize":"360x563",
  		    "pixel_ratio":"x2",
  		    "resolution":"",
  		    "donator":"Thomas Phillipona"
  		  },
  		  {
  		    "device":"HTC Tablet",
  		    "model_number":"Nexus 9",
  		    "os_version":"5.0.1",
  		    "serial_number":"HT4ANJT03782",
  		    "imei":"",
  		    "screensize":"768x1024",
  		    "pixel_ratio":"X2",
  		    "resolution":"190-199",
  		    "donator":"Puzzle ITC GmbH"
  		  }
        // {
        //   "device":"Jolla",
        //   "model_number":"",
        //   "os_version":"1.0.8.9",
        //   "serial_number":"",
        //   "imei":"35974505310504",
        //   "screensize":"960x540",
        //   "pixel_ratio":"",
        //   "resolution":"",
        //   "donator":"Martin Gafner"
        // }
  		];
    var deviceList = $("#device-list").html();
    var compiledDeviceList = Handlebars.compile(deviceList)(deviceData);
    $('.devices-list').append(compiledDeviceList);

    //scroll disabler

    var body = document.body,
        timer;

    window.addEventListener('scroll', function() {
      clearTimeout(timer);
      if(!body.classList.contains('scrolling')) {
        body.classList.add('scrolling');
      }

      timer = setTimeout(function(){
        body.classList.remove('scrolling');
      },500);
    }, false);


  });

})(Zepto, window, document);

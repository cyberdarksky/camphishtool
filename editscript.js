
/ ** ***************************************
	
    @Yazar Avanzare
	@Websitesi www.avanzare.co
	@Son Güncelleme 20:26 04 Kasım 2014 Salı

	İÇİNDEKİLER
	---------------------------
	 1. Ön Yükleyici + Animasyon
	 2. Mobil Algılama
     3. Geçmiş
	 4. Döngü
	 5. Yer paylaşımı
	 6. Ajax Abone Ol
	 7. Ajax İletişim
		
 ** *************************************** /
 

/ ** 1. ÖN YÜKLEYİCİ + ANİMASYON
 ************************************************** *** /
$ (pencere) .load (işlev () {
	
	$ ('. soket']. addClass ('animasyonlu fadeOut');	
	
	//PARALAKS
	$ ['gövde']. paralaks ({
	  scalarX: 25,
	  skalarY: 15,
	  frictionX: 0.1,
	  sürtünmeY: 0.1,
	});
	
	  setTimeout (function () {
		  $ ('# prelaoder']. addClass ('animasyonlu fadeOut'). fadeOut (2000);	
	  
		  setTimeout (function () {
			  $ ('# ana ekran. içerik bloğu img.logo'). addClass ('animasyonlu fadeInDown');
			  
			  setTimeout (function () {
				  $ ('# ana ekran. içerik bloğu h1'). addClass ('animasyonlu fadeInUp');	
				  
				  setTimeout (function () {
					  $ ('# ana ekran. içerik bloğu p'). addClass ('animasyonlu fadeInUp');
					  
					  setTimeout (function () {
						  $ ('. arrow-wrap']. addClass ('animasyonlu fadeInUp');
					  
						  setTimeout (function () {
							  $ ['# canvas-container']. addClass ('animasyonlu fadeInUp');  
		  
							  setTimeout (function () {
								  activeOverlays = 1;
								  $ ('# tuval-kapsayıcı']. css ('opaklık', '1');  
								  $ ('. arrow-wrap']. css ('opaklık', '1');
								  $ ('# ana ekran. içerik bloğu p'). css ('opaklık', '1');
								  $ ('# ana ekran. içerik bloğu h1'). css ('opaklık', '1');
								  $ ('# ana ekran. içerik bloğu img.logo'). css ('opaklık', '1');
								  
							  }, 1000); 
						  }, 500);
					  }, 500); 
				  }, 500);
			  }, 500);
		  }, 1000); 
	  }, 1000); 
  
});

$ (belge) .ready (işlev () {

	var activeOverlays = 0;
	
	$ (". overlay-content .social-icons li a"). araç ipucu ({
		kapsayıcı: 'gövde',
		gecikme: {"göster": 100, "gizle": 0}
	});
	$ (". overlay-content .social-icons li a"). click (function () {
		$ (this) .tooltip ('gizle')
	});
	
});

/ ** 2. MOBİL ALGILAMA
 ************************************************** *** /

(function (a) {(jQuery.browser = jQuery.browser || {}). mobile = / (android | bb \ d + | meego). + mobile | avantgo | bada \ / | blackberry | android | ipad | playbook | ipek | blazer | compal | elaine | rezene | hiptop | iemobile | ip (bileme | od) | iris | kindle | lge | maemo | midp | mmp | mobile. + firefox | netfront | opera m (ob | in) i | palmiye (os)? | telefon | p (ixi | re) \ / | plucker | pocket | psp | series (4 | 6) 0 | symbian | treo | up \. (tarayıcı | bağlantı) | vodafone | wap | windows (ce | telefon) | xda | xiino / i.test (a) || / 1207 | 6310 | 6590 | 3gso | 4thp | 50 [1-6] i | 770s | 802s | a wa | abac | ac (er | oo | s \ -) ​​| ai (ko | rn) | al (av | ca | co) | amoi | an (eski | ny | yw) | aptu | ar (ch | go) | as (te | us) | attw | au (di | \ -m | r | s) | avan | be (ck | ll | nq) | bi (lb | rd) | bl (ac | az) | br (e | v) w | bumb | bw \ - (n | u) | c55 \ / | capi | ccwa | cdm \ - | hücre | chtm | cldc | cmd \ - | co (mp | nd) | craw | da (it | ll | ng) | dbte | dc \ -s | devi | dica | dmob | do (c | p) o | ds (12 | \ -d) | el (49 | ai) | em (l2 | ul) | er (ic | k0) | esl8 | ez ([4-7] 0 | os | wa | ze) | fetc | sinek (\ - | _) | g1 u | g560 | gen | gf \ -5 | g \ -mo | go (\.w | od) | gr (ad | un) | haie | hcit | hd \ - (m | p | t) | hei \ - | merhaba (pt | ta) | hp (i | ip) | hs \ -c | ht (c (\ - | | _ | a | g | p | s | t) | tp) | hu (aw | tc) | i \ - (20 | git | ma) | i230 | iac (| \ - | \ /) | ibro | fikir | ig01 | ikom | im1k | inno | ipaq | iris | ja (t | v) a | jbro | jemu | jigs | kddi | keji | kgt (| \ /) | klon | kpt | kwc \ - | kyo (c | k) | le (yok | xi) | lg (g | \ / (k | l | u) | 50 | 54 | \ - [aw]) | libw | vaşak | m1 \ -w | m3ga | m50 \ / | ma (te | ui | xo) | mc (01 | 21 | ca) | m \ -cr | me (rc | ri) | mi (o8 | oa | ts) | mmef | mo ( 01 | 02 | bi | de | do | t (\ - | | o | v) | zz) | mt (50 | p1 | v) | mwbp | mywa | n10 [0-2] | n20 [2-3] | n30 (0 | 2) | n50 (0 | 2 | 5) | n7 (0 (0 | 1) | 10) | ne ( (c | m) \ - | on | tf | wf | wg | wt) | nok (6 | i) | nzph | o2im | op (ti | wv) | oran | owg1 | p800 | pan (a | d | t ) | pdxg | pg (13 | \ - ([1-8] | c)) | phil | pire | pl (ay | uc) | pn \ -2 | po (ck | rt | se) | prox | psio | pt \ -g | qa \ -a | qc (07 | 12 | 21 | 32 | 60 | \ - [2-7] | i \ -) ​​| qtek | r380 | r600 | raks | rim9 | ro (ve | zo ) | s55 \ / | sa (ge | ma | mm | ms | ny | va) | sc (01 | h \ - | oo | p \ -) ​​| sdk \ / | se (c (\ - | 0 | 1 ) | 47 | mc | nd | ri) | sgh \ - | shar | sie (\ - | m) | sk \ -0 | sl (45 | id) | sm (al | ar | b3 | it | t5) | çok (ft | ny) | sp (01 | h \ - | v \ - | v) | sy (01 | mb) | t2 (18 | 50) | t6 (00 | 10 | 18) | ta (gt | lk ) | tcl \ - | tdg \ - | tel (i | m) | tim \ - | t \ -mo | to (pl | sh) | ts (70 | m \ - | m3 | m5) | tx \ -9 | up (\. b | g1 | si) | utst | v400 | v750 | veri | vi (rg | te) | vk (40 | 5 [0-3] | \ -v) | vm40 | voda | vulc | vx (52 | 53 | 60 | 61 | 70 | 80 | 81 | 83 | 85 | 98) | w3c (\ - |) | webc | whit | wi (g | nc | nw) | wmlb | wonu | x700 | yas \ - | sizin | zeto | zte \ - / i.test (a.substr (0,4))}) (navigator.userAgent || navigator.vendor || window.opera);	

   
/ ** 3. ARKA FON
 ************************************************** *** /
$ (belge) .ready (işlev () {

$ ('# bg-resim']. gerdirme ([
"https://www.imagevisit.com/images/2018/11/19/dd224.jpg"
, "https://initiate.alphacoders.com/images/101/cropped-1920-1080-1010066.jpg?4310"
, "https://i.postimg.cc/FHgFGjzb/Full-Hd.jpg"
, "https://i.postimg.cc/4xvCpz2t/e.jpg"
, "https://www.imagevisit.com/images/2019/03/03/ddv-Recovered.jpg"
, "https://i.ibb.co/BgchtP7/2.jpg"
, "https://i.ibb.co/9ZtBTdd/9.jpg"
, "https://i.postimg.cc/qvc76htW/wqesad.jpg"
, "https://i.ibb.co/N1GtH8p/unkownj.jpg"
, "https://i.ibb.co/xhhNRGv/4.jpg"
, "https://i.ibb.co/zQw1Z1h/6.jpg"
, "https://i.ibb.co/SRLMphv/7.jpg"
, "https://i.ibb.co/v35BqN1/1.jpg"

], {süre: 7000, solma: 500});

});

$ (belge) .ready (işlev () {

	// TUVAL 
	function callCanvas (canvas) {
		
		// AYARLAR
		var screenpointSplitt = 10000 
		var moveSpeed ​​= 0.1 
		
		var viewportWidth = $ (pencere) .width ();
		var viewportHeight = $ (pencere) .height ();
		
		// Ekran Noktalarını Hesapla
		var nbCalculated = Math.round (viewportHeight * viewportWidth / screenpointSplitt)
		
		// YAPILANDIR
		var _this = this,
		
			ctx = canvas.getContext ('2d');
	
		_this.config = {
			
			yıldız: {
				renk: 'rgba (255, 255, 255, 1)'
			},
			
			hat: {
				renk: 'rgba (255, 255, 255, 1)',
				genişlik: 0.1
			},
			
			durum: {
				x: canvas.width * 0.5,
				y: canvas.height * 0.5
			},
			
			hız: moveSpeed,
			uzunluk: nbCalculated,
			mesafe: 120,
			yarıçap: 120,
			yıldızlar: []
			
		};
		
		function Yıldız () {
			this.x = Math.random () * canvas.width;
			this.y = Math.random () * canvas.height;
	
			this.vx = (_this.config.velocity - (Math.random () * 0.3));
			this.vy = (_this.config.velocity - (Math.random () * 0.3));
	
			this.radius = Math.random ();
		}
	
		Star.prototype = {
			oluştur: function () {
				ctx.beginPath ();
				ctx.arc (this.x, this.y, this.radius, 0, Math.PI * 2, false);
				ctx.fill ();
			},
	
			animate: function () {
				var i;
				for (i = 0; i <_this.config.length; i ++) {
	
					var star = _this.config.stars [i];
	
					eğer (star.y <0 || star.y> canvas.height) {
						star.vx = star.vx;
						star.vy = - star.vy;
					}
					else if (star.x <0 || star.x> canvas.width) {
						star.vx = - star.vx;
						star.vy = star.vy;
					}
					yıldız.x + = yıldız.vx;
					star.y + = star.vy;
				}
			},
	
			satır: işlev () {
				var uzunluk = _this.config.length,
					Ben yıldız,
					jStar,
					ben,
					j;
	
				for (i = 0; i <uzunluk; i ++) {
					for (j = 0; j <uzunluk; j ++) {
						iStar = _this.config.stars [i];
						jStar = _this.config.stars [j];
	
						Eğer(
							(iStar.x - jStar.x) <_this.config.distance &&
							(iStar.y - jStar.y) <_this.config.distance &&
							(iStar.x - jStar.x)> - _this.config.distance &&
							(iStar.y - jStar.y)> - _this.config.distance
						) {
							Eğer(
								(iStar.x - _this.config.position.x) <_this.config.radius &&
								(iStar.y - _this.config.position.y) <_this.config.radius &&
								(iStar.x - _this.config.position.x)> - _this.config.radius &&
								(iStar.y - _this.config.position.y)> - _this.config.radius
							) {
								ctx.beginPath ();
								ctx.moveTo (iStar.x, iStar.y);
								ctx.lineTo (jStar.x, jStar.y);
								ctx.stroke ();
								ctx.closePath ();
							}
						}
					}
				}
			}
		};
	
		_this.createStars = function () {
			var uzunluk = _this.config.length,
				star,
				ben;
	
			ctx.clearRect (0, 0, canvas.width, canvas.height);
			for (i = 0; i <uzunluk; i ++) {
				_this.config.stars.push (yeni Yıldız ());
				star = _this.config.stars [i];
	
				star.create ();
			}
	
			Yıldız yolu();
			star.animate ();
		};
	
		_this.setCanvas = function () {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
	
		_this.setContext = function () {
			ctx.fillStyle = _this.config.star.color;
			ctx.strokeStyle = _this.config.line.color;
			ctx.lineWidth = _this.config.line.width;
		};
	
		_this.loop = function (geri arama) {
			geri aramak();
	
			reqAnimFrame (function () {
				_this.loop (function () {
					geri aramak();
				});
			});
		};
	
		_this.bind = function () {
			$ (pencere) .on ('mousemove', işlev (e) {
				_this.config.position.x = e.pageX;
				_this.config.position.y = e.pageY;
			});
		};
	
		_this.init = function () {
			_this.setCanvas ();
			_this.setContext ();
	
			_this.loop (function () {
				_this.createStars ();
			});
	
			_this.bind ();
		};
	  
	  dönüş _this;
	}
	
    // requestAnimationFrame

	var reqAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (geri arama) {
		window.setTimeout (geri arama, 1000/60);
	};
	
	callCanvas ($ ('canvas') [0]). init ();	
	
	// Tuvali yeniden boyutlandır 
	var waitForFinalEvent = (function () {
	  var zamanlayıcılar = {};
	  dönüş işlevi (geri arama, ms, benzersizId) {
		if (! uniqueId) {
		  uniqueId = "UniqueId olmadan bunu iki kez çağırmayın";
		}
		eğer (zamanlayıcılar [uniqueId]) {
		  clearTimeout (zamanlayıcılar [uniqueId]);
		}
		zamanlayıcılar [uniqueId] = setTimeout (geri arama, ms);
	  };
	}) ();
	
	$ (pencere) .resize (function () {
		waitForFinalEvent (function () {
			callCanvas ($ ('canvas') [0]). init ();	

		}, 400, "bazı benzersiz dizeler");
	});

});

$ (belge) .ready (işlev () {
	
	// ARKA PLANI PARALAKS AYARLA
    $ ('# bg-resim']. css ('dönüştürme', 'ölçek (1.06)');
    $ ('# bg-image .backstretch']. attr ('veri derinliği', 0.1);
	$ ('# bg-image .backstretch']. addClass ('katman');
	$ ('# wrapper_mbYTP_bgndVideo'). css ('dönüştürme', 'ölçek (1.06)');
    $ ('# bg-video']. attr ('veri derinliği', 0.1);
	$ ('# bg-video']. addClass ('katman');

});

/ ** 4. DÖNGÜ
 ************************************************** *** /
$ (belge) .ready (işlev () {
	
	$ ['. slider']. döngüsü ({
		fx: 'scrollVert',
		zaman aşımı: 7000,
		gecikme: 1000,
		hız: 500,
		slaytlar: ".slide"
	});
	
});


/ ** 5. GENİŞLEME
 ************************************************** *** /
$ (belge) .ready (işlev () {
	
	
	//TEMEL FONKSİYONLAR 
	function hideFrontContent () {
		$ ('. content-block .container']. fadeOut ('yavaş');
	}
		
	function showFrontContent () {
		$ ('. content-block .container']. fadeIn ('yavaş');
	}
	
	function hideOverlayContent () {
		$ ('. overlay .overlay-container'). fadeOut ('yavaş');
		$ ('. overlay .overlay-container'). removeClass ('fadeInUp');
		$ ('. overlay .overlay-container'). addClass ('fadeOutDown');
	}
		
	function showOverlayContent () {
		$ ('. overlay .overlay-container']. fadeIn ('yavaş');
		$ ('. overlay .overlay-container'). removeClass ('fadeOutDown');
		$ ('. overlay .overlay-container']. addClass ('fadeInUp');
	}
	
	function showCloseButton () {
		$ ('. close-overlay']. fadeIn ('slow');
		$ ('. close-overlay']. removeClass ('fadeOutUpBig');
		$ ('. close-overlay']. addClass ('fadeInDownBig');
	}
	
	function hideCloseButton () {
		$ ('. close-overlay']. fadeOut ('yavaş');
		$ ('. close-overlay']. removeClass ('fadeInDownBig');
		$ ('. close-overlay']. addClass ('fadeOutUpBig');
	}
	
	function showContactCloseButton () {
		$ ['. close-contact']. fadeIn ('slow');
		$ ('. close-contact']. removeClass ('fadeOutUpBig');
		$ ('. close-contact']. addClass ('fadeInDownBig');
	}
	
	function hideContactCloseButton () {
		$ ('. close-contact']. fadeOut ('yavaş');
		$ ('. close-contact']. removeClass ('fadeInDownBig');
		$ ('. close-contact']. addClass ('fadeOutUpBig');
	}
	
	function showOverlay () {
		$ ('. overlay']. removeClass ('hideOverlay');
		$ ('. overlay']. addClass ('showOverlay');
	}
	
	function hideOverlay () {
		$ ('. overlay']. removeClass ('showOverlay');
		$ ('. overlay']. addClass ('hideOverlay');
	}
	
	function showOverlayContact () {
		$ ('. overlay-contact']. removeClass ('hideOverlay');
		$ ('. overlay-contact']. addClass ('showOverlay');
	}
	
	function hideOverlayContact () {
		$ ('. overlay-contact']. removeClass ('showOverlay');
		$ ('. overlay-contact']. addClass ('hideOverlay');
	}

	function hideOverlayContactContent () {
		$ ('. overlay-contact .overlay-container'). fadeOut ('yavaş');
		$ ('. overlay-contact .overlay-container'). removeClass ('fadeInUp');
		$ ('. overlay-contact .overlay-container'). addClass ('fadeOutDown');
	}
		
	function showOverlayContactContent () {
		$ ('. overlay-contact .overlay-container'). fadeIn ('yavaş');
		$ ('. overlay-contact .overlay-container'). removeClass ('fadeOutDown');
		$ ('. overlay-contact .overlay-container'). addClass ('fadeInUp');
	}
	
	
   	// DURUM VARLARI
	var overlayStatus = 0;
	var overlayContactStatus = 0;
	var statusforGoTo = 0;
	
	
	// OVERLAY BAĞLANTISI FONKSİYONU
	function openOverlay () {
		
		hideFrontContent ();
		
			setTimeout (function () {	
			showOverlay ();
			showCloseButton ();
			
			  setTimeout (function () {
				showOverlayContent ();
				
				  setTimeout (function () {
					  overlayStatus = 1;
					  statusforGoTo = 1;
	
				  
				  }, 800);
			  }, 400);
		   }, 400);
		  
	}

	function closeOverlay () {
		
		hideCloseButton ();
		hideOverlayContent ();
		
		  setTimeout (function () {	 
			hideOverlay ();
			  
			  setTimeout (function () {
				  showFrontContent ();
				  
				  setTimeout (function () {
					  activeOverlays = 1;
					  statusforGoTo = 0;
	
				  
				  }, 1000);
			  }, 400);
		  }, 600);
		  
	}
	
	// OVERLAY İLETİŞİMİNE BAĞLANAN FONKSİYON
	function openOverlayContact () {
		
		hideCloseButton ();
		hideOverlayContent ();
		
			setTimeout (function () {
			showOverlayContact ();
			showContactCloseButton ();
			
				setTimeout (function () {
					showOverlayContactContent ();
						  
					setTimeout (function () {
						overlayContactStatus = 1;
	  
					}, 1000);
				}, 400);
			}, 200);
		  
	}
	
	function closeOverlayContact () {
		
		hideContactCloseButton ();
		hideOverlayContactContent ();
		showCloseButton ();	
			setTimeout (function () {	 
				hideOverlayContact ();
				showOverlayContent ();
								  
				  setTimeout (function () {
					  overlayStatus = 1;
					  statusforGoTo = 1;
	
				  
				  }, 1000); 	
			  }, 400);		
		  
	}
	
	
	
	
	// ÇAĞRI İŞLEVLERİ GENİŞLEME
	$ ('. open-overlay'). tıklayın (function () {
		
		openOverlay ();
		  			  
	});	
	
	
	$ ('. close-overlay'). tıklayın (function () {
		
		closeOverlay ();
		  				  
	});
	

	$ ('. overlay']. bind ('fare tekerleği', işlev (e) {
		eğer (e.originalEvent.wheelDelta / -120> 0) {
			// alert ('aşağı');
		} Başka {
			
				procesfinshedOverlay1 ();
				function procesfinshedOverlay1 () {
				  if (overlayStatus == 1) {
					  closeOverlay ();
					  overlayStatus = 0;
					  statusforGoTo = 0;
					  
				  }Başka {}
				}
		  	
		}

	});


	$ ('# ön sayfa']. bind ('fare tekerleği', işlev (e) {
		eğer (e.originalEvent.wheelDelta / 120> 0) {
			// alert ('yukarı');
		} Başka {
			
		    preloadprocessfinshed ();
			function preloadprocessfinshed () {
			  eğer (activeOverlays == 1) {
				  openOverlay ();
				  activeOverlays = 0;
				  
			  }Başka {}
			}
		  	
		}

	});
	
	
	
	// CALL FUNCTION OVERLAY CONTACT
	$ ('. open-contact']. tıklayın (function () {
		
		 openOverlayContact ();
		  				  
	});
	
	$ ['. yakın temas']. tıklayın (function () {
		
		closeOverlayContact ();
		  				  
	});
	
	
	$ ('. overlay']. bind ('fare tekerleği', işlev (e) {
		eğer (e.originalEvent.wheelDelta / 120> 0) {
			// alert ('yukarı');
		} Başka {
			
			processfinshedGoTo ();
			function processfinshedGoTo () {
			  eğer (statusforGoTo == 1) {
				  openOverlayContact ();
				  statusforGoTo = 0;
				  overlayStatus = 0;
				  
			  }Başka {}
			}
		  	
		}

	});
	
	$ ('. overlay-contact']. bind ('fare tekerleği', işlev (e) {
		eğer (e.originalEvent.wheelDelta / -120> 0) {
			// alert ('aşağı');
		} Başka {
			
		  	procesfinshedOverlayContact1 ();
			function procesfinshedOverlayContact1 () {
			  if (overlayContactStatus == 1) {
				  closeOverlayContact ();
				  overlayContactStatus = 0;
				  
			  }Başka {}
			}
			
		}

	});

	
});

/ ** 6. AJAX ABONELİĞİ
 ************************************************** *** /
$ (belge) .ready (işlev () {
	
	$ ('. subscribe-form']. submit (function () {
		  var postdata = $ ('. subscribe-form']. serialize ();
		  $ .ajax ({
			  tür: 'POST',
			  url: 'varlıklar / abone.php',
			  veri: postdata,
			  dataType: 'json',
			  success: function (json) {
				  if (json.valid == 0) {
					  $ ('. durum mesajı']. html (json.error);
					  $ ('. durum-mesajı']. fadeIn ('yavaş');
					  $ ('. status-message']. css ('margin-top', '5px');
				  }
				  Başka {
					  $ ("girdi, metin alanı"). val ('');
					  $ ('. abone formu düğmesi'). prop ('devre dışı', doğru);
					  $ ('. durum mesajı']. html (json.message);
					  $ ('. durum-mesajı']. fadeIn ('yavaş');
					  $ ('. status-message']. css ('margin-top', '5px');
				  }
			  }
			});
			yanlış dönüş;
		});
		
});


/ ** 7. AJAX İLETİŞİM
 ************************************************** *** /
$ (belge) .ready (işlev () {
	
	$ ('. iletişim formu formu']. submit (function () {
	
			$ ('. iletişim formu formu .nameLabel']. html ('Ad');
			$ ('. contact-form form .emailLabel']. html ('E-posta');
			$ ('. contact-form form .messageLabel'). html ('Mesaj');
	
			var postdata = $ ('. iletişim formu']. serialize ();
			$ .ajax ({
				tür: 'POST',
				url: 'varlıklar / sendmail.php',
				veri: postdata,
				dataType: 'json',
				success: function (json) {
					eğer (json.nameMessage! = '') {
						$ ('. contact-form form .nameLabel'). append ('- <span class = "status">' + json.nameMessage + '</span>');
					}
					eğer (json.emailMessage! = '') {
						$ ('. contact-form form .emailLabel'). append ('- <span class = "status">' + json.emailMessage + '</span>');
					}
					eğer (json.messageMessage! = '') {
						$ ('. contact-form form .messageLabel'). append ('- <span class = "status">' + json.messageMessage + '</span>');
					}
					eğer (json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
							$ ('. contact-form .status-message-contact'). addClass ('animasyonlu fadeIn'). html ('E-POSTA BAŞARIYLA GÖNDERİLDİ.');
							$ ('input [tür = "metin"], metin alanı'). val ('');
					}
				}
			});
			yanlış dönüş;
		});	
			
});
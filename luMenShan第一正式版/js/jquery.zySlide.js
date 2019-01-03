

//-------------------------------------------------------------------------//
(function ($) {
    // 鍒涘缓鏋勯€犲嚱鏁�
    function Slide(ele, options) {
        this.$ele = $(ele)//this. 鏋勯€犲嚱鏁扮殑瀹炰緥瀵硅薄
        this.options = $.extend({
            speed: 1000,
            delay: 3000
        }, options)//鎷撳睍
        this.states = [
            { '&zIndex': 1, width: 165, height: 210, top: 71, left:'0%', $opacity: .7 },
            { '&zIndex': 2, width: 190, height: 230, top: 61, left:'15%', $opacity: 0.8 },
            { '&zIndex': 3, width: 220, height: 270, top: 37, left:'30%', $opacity: 0.9 },
            { '&zIndex': 4, width: 280, height: 340, top: 0, left: '45%', $opacity: 1 },
            { '&zIndex': 3, width: 220, height: 270, top: 37, left:'60%', $opacity: 0.9 },
            { '&zIndex': 2, width: 190, height: 230, top: 61, left:'75%', $opacity: .8 },
            { '&zIndex': 1, width: 165, height: 210, top: 71, left:'90%', $opacity: .7 }
        ]
        this.lis = this.$ele.find('li')
        this.interval
        // 鐐瑰嚮鍒囨崲鍒颁笅涓€寮�

        this.$ele.find('section:nth-child(2)').on('click', function () {
            this.stop()
            this.next()
            this.play()
        }.bind(this))
        // 鐐瑰嚮鍒囨崲鍒颁笂涓€寮�
        this.$ele.find('section:nth-child(1)').on('click', function () {
            this.stop()
            this.prev()
            this.play()
        }.bind(this))
        this.move()
        // 璁╄疆鎾浘寮€濮嬭嚜鍔ㄦ挱鏀�
        this.play()
    }


    Slide.prototype = {


        // 鍘熷瀷鏄竴涓璞★紝鎵€浠ュ啓鎴愪竴涓姳鎷彿

        // move()鏂规硶璁╄疆鎾浘鍒拌揪states鎸囧畾鐨勭姸鎬�
        // <1>褰撻〉闈㈡墦寮€鏃跺皢杞挱鍥句粠涓績鐐瑰睍寮€
        // <2>褰撹疆鎾浘宸茬粡灞曞紑鏃讹紝浼氭粴鍔ㄨ疆鎾浘(闇€瑕佺炕杞瑂tates鏁扮粍涓殑鏁版嵁)
        move: function () {

            this.lis.each(function (i, el) {
                $(el).css('z-index', this.states[i]['&zIndex'])
                    .finish().animate(this.states[i], this.options.speed)
                    // .stop(true,true).animate(states[i], 1000)
                    .find('img').css('opacity', this.states[i].$opacity)
            }.bind(this))
        },
        // 璁╄疆鎾浘鍒囨崲鍒颁笅涓€寮�
        next: function () {

            this.states.unshift(this.states.pop())
            this.move()
        },
        // 璁╄疆鎾浘婊氬姩鍒颁笂涓€寮�
        prev: function () {

            this.states.push(this.states.shift())
            this.move()
        },
        play: function () {

            this.interval = setInterval(function () {//杩欎釜this鎸噖indow
                // setInterval銆乻etTimeOut 涓殑this鎸囧悜window

                // states.unshift(states.pop())       //浠庡悗寰€鍓嶈蛋
                // states.push(states.shift())     //浠庡墠寰€鍚庤蛋
                this.next()
            }.bind(this), this.options.delay)
        },
        // 鍋滄鑷姩鎾斁
        stop: function () {
            // var _this = this
            clearInterval(this.interval)
        }

    }
    $.fn.zySlide = function (options) {
        this.each(function (i, ele) {
            new Slide(ele, options)
        })
        return this
    }
})(jQuery)
//--------------------------------------------------------------------------------------//
    // var $ = jQuery
    // 闇€瑕佺珛鍗宠皟鐢ㄥ尶鍚嶅嚱鏁�()
    // 鏈嚱鏁版瘡娆¤皟鐢ㄦ椂鍙互鍒涘缓涓€涓嚱鏁颁綔鐢ㄥ煙
    // 杩欎釜鍑芥暟浣滅敤鍩熷彧鑳藉垎閰嶇粰涓€涓疆鎾浘
    // 鎵€浠ョ幇鍦ㄨ姹傝皟鐢ㄦ湰鍑芥暟鐨勬椂鍊欙紝蹇呴』鎶�
    // 杞挱鍥炬牴鏍囩鍏冪礌閫氳繃鍙傛暟浼犺繃鏉�
    // 璋冪敤鍑芥暟鏃舵瘡娆¤皟鐢ㄩ兘浼氬垱閫犲叏鏂扮殑浣滅敤鍩燂紝鏃犺闂寘杩樻槸涓嶉棴鍖�
    // var Slide = function (ele, options) {
    //     // 缁欏嚱鏁扮殑鍙傛暟璁剧疆榛樿鍊� 鐢▅| 3000 1000 閮芥槸榛樿鍊�
    //     // var delay = d || 3000
    //     // var speed = s || 1000
    //     var $ele = $(ele)

        // var options = $.extend({
        //     delay: 3000,
        //     speed: 1000
        // }, options)

    //     var states = [
    //         { '&zIndex': 1, width: 120, height: 150, top: 71, left: 134, $opacity: 0.5 },
    //         { '&zIndex': 2, width: 130, height: 170, top: 61, left: 0, $opacity: 0.6 },
    //         { '&zIndex': 3, width: 170, height: 218, top: 37, left: 110, $opacity: 0.7 },
    //         { '&zIndex': 4, width: 224, height: 288, top: 0, left: 262, $opacity: 1 },
    //         { '&zIndex': 3, width: 170, height: 218, top: 37, left: 468, $opacity: 0.7 },
    //         { '&zIndex': 2, width: 130, height: 170, top: 61, left: 620, $opacity: 0.6 },
    //         { '&zIndex': 1, width: 120, height: 150, top: 71, left: 496, $opacity: 0.5 }
    //     ]
    //     var lis = $ele.find('li')
    //     var interval

    //     // move()鏂规硶璁╄疆鎾浘鍒拌揪states鎸囧畾鐨勭姸鎬�
    //     // <1>褰撻〉闈㈡墦寮€鏃跺皢杞挱鍥句粠涓績鐐瑰睍寮€
    //     // <2>褰撹疆鎾浘宸茬粡灞曞紑鏃讹紝浼氭粴鍔ㄨ疆鎾浘(闇€瑕佺炕杞瑂tates鏁扮粍涓殑鏁版嵁)
    //     function move() {
    //         lis.each(function (i, el) {
    //             // end():灏嗗尮閰嶅厓绱犲垪琛ㄥ彉涓哄墠涓€娆＄殑鐘舵€�
    //             // .end()
    //             $(el)
    //                 .css('z-index', states[i]['&zIndex'])
    //                 .finish().animate(states[i], options.speed)
    //                 // .stop(true,true).animate(states[i], 1000)
    //                 .find('img').css('opacity', states[i].$opacity)
    //         })
    //     }
    //     function next() {
    //         states.unshift(states.pop())
    //         move()
    //     }
    //     // 璁╄疆鎾浘婊氬姩鍒颁笂涓€寮�
    //     function prev() {
    //         states.push(states.shift())
    //         move()
    //     }
    //     // 鑷姩鎾斁
    //     function play() {
    //         interval = setInterval(function () {
    //             // states.unshift(states.pop())       //浠庡悗寰€鍓嶈蛋
    //             // states.push(states.shift())     //浠庡墠寰€鍚庤蛋
    //             next()
    //         }, options.delay)
    //     }
    //     // 鍋滄鑷姩鎾斁
    //     function stop() {
    //         clearInterval(interval)
    //     }
    //     // 璁╄疆鎾浘浠庝腑蹇冪偣灞曞紑
    //     move()
    //     play()

    //     $ele.find('section:nth-child(2)').on('click', function () {
    //         stop()
    //         next()
    //         play()
    //     })
    //     // 鐐瑰嚮鍒囨崲鍒颁笂涓€寮�
    //     $ele.find('section:nth-child(1)').on('click', function () {
    //         stop()
    //         prev()
    //         play()
    //     })
    // }

//     $.fn.zySlide = function () {
//         this.each(function (i, ele, options) {
//             Slide(ele, options)
//         })
//         return this
//     }
// })(jQuery)//鍗曠嫭浣跨敤鍖垮悕鍑芥暟鏃跺簲绔嬪嵆璋冪敤鍖垮悕鍑芥暟()
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
// alert(typeof $('body'));




// $.hello = function(){
//     alert('sss')
// }
// $.hello()

// var name = '123';
// console.log(name);
// window.name = '456';
// console.log(name);
// console.log($ele.name);
// $ele.name = 'abc';
// console.log(name);
// function test(){
//     $ele.name = 'xyz';
// }
// // 鍦ㄥ叏灞€浣滅敤鍩熼噷锛�$ele鎸囧悜鐨勬槸window
// // 鍦ㄥ叏灞€浣滅敤鍩熼噷瀹氫箟涓€涓嚱鏁帮紝
// // <1>闈炴櫘閫氭柟娉曡皟鐢�:$ele鎸囧悜鏂板垱寤虹殑瀵硅薄
// // <2>鏅€氭柟娉曡皟鐢�:$ele鎸囧悜window
// new test()//闈炴櫘閫氭柟娉曡皟鐢�
// console.log(name)
// test()//鏅€氭柟娉曡皟鐢�
// console.log(name)

// var testObj = {}
// test.call(testObj)

// console.log(name)
// console.log(testObj.name)
//-------------------------------------------------------------------------//
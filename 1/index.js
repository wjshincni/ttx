function $(str) {
	return document.getElementById(str);
}

function $tag(str,target) {
	target = target || document;
	return target.getElementsByTagName(str);
}

function addEventHandler(obj,eType,fuc){
	if(obj.addEventListener){ 
		obj.addEventListener(eType,fuc,false); 
	}else if(obj.attachEvent){ 
		obj.attachEvent("on" + eType,fuc); 
	}else{ 
		obj["on" + eType] = fuc; 
	} 
} 

function removeEventHandler(obj,eType,fuc){
	if(obj.removeEventListener){ 
		obj.removeEventListener(eType,fuc,false); 
	}else if(obj.attachEvent){ 
		obj.detachEvent("on" + eType,fuc); 
	} 
}

function randowNum(start,end) {
	return Math.floor(Math.random()*(end - start)) + start;
}

Array.prototype.remove=function(dx) {
	if(isNaN(dx)||dx>this.length){return false;}
	for(var i=0,n=0;i<this.length;i++)
	{
		if(this[i]!=this[dx])
		{
			this[n++]=this[i]
		}
	}
	this.length-=1
}

var TOTALR = 15, 
	R = 12, 
	POKER = 20,
	W = 736, 
	H = 480, 
	THICKNESS =  32, 
	RATE = 100, 
	F = 0.01, 
	LOSS = 0.2, 
	TIPS = [
	"0001|获胜的关键:自信---你要相信你赢了,然后你就可以退出了 ",
	"0010|获胜的关键: 打败可恶的徐志豪,再把黑暗的唐斯雨送进洞",
	"0011|Work up , 你怎么被这点小困难挡住了球杆?先把唐斯雨打进去了,徐志豪就会知难而退了",
	"0100|我知道你在看,所以我什么都不说",
	"0101|别看球桌简陋,其实确实是我瞎画的",
	"0110|你可以在右下角加塞,要是这还不会,那请Alt+F4",
	"0111|本游戏由英文制作,没有任何噱头,没错就是英文",
	"1000|我问你,本游戏用什么语言制作?",
	"1001|对,英文!!!!!!",
	"1010|你知道的,胜利的关键就是失败,那你也太成功了",
	"1011|可能我只要再熬10天夜,休息个一个月,就又可以通宵一学期了,真高兴",
	"1100|小心老师!",
	"1101|我想你一定不知道一共有85个'有用的提示'",
	"1110|本游戏从构思到开发耗时一晚上,从编写到整合耗时一早上",
	"1111|你知道为什么要有0和1作为'有用的提示'的开头吗?",
	"0001 0000|我知道你一定不知道,但你不知道我知道,我不让你知道,知道了吗",
	"0001 0001|或许你们在吃饭,那我也只好...",
	"0001 0010|💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩",
	"0001 0011|我不是故意的,没关系",
	"0001 0100|💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩",
	"0001 0101|现在是北京时间2023/12/24,9:51:42,我准备写作业了",
	"0001 0110|Work up , 我发现了一首歌叫睡你麻痹起来嗨,好听",
	"0001 0111|我搞不懂为什么有人打文案加个点在后面.",
	"0001 1000|停,这个问题给唐斯雨 现在是第几个问题了",
	"0001 1001|答案是!",
	"0001 1010|我就知道班长不会,当然我也需要借助计算器😏",
	"0001 1011|要不试试打进下面的中袋?",
	"0001 1100|你觉得'有用的提示'算是个彩蛋吗?",
	"0001 1101|你猜猜就这么个'有用的提示'占了总程序大小的多少?",
	"0001 1110|98%大小占比!",
	"0001 1111|又一个1111到了 猜猜是第几个'有用的提示'?",
	"0010 0000|这是第32个了",
	"0010 0001|一个程序少不了的就是变量了,每个变量都应该有独立的名字,随不同脚本改变条件",
	"0010 0010|那你猜我给'有用的提示'变量起了什么名字?",
	"0010 0011|没错,'Tips',小班长一定想到了",
	"0010 0100|But,你没看到这是普通文字吗,它没变量🤣🤣🤣",
	"0010 0101|已经打开370秒,约合6.2分钟",
	"0010 0110|打游戏卡吗?教你一招,快速眨眼提高帧率",
	"0010 0111|我到现在才知道酱油是豆酿的",
	"0010 1000|我还差数学英语物理化学了.但已经19:21了",
	"0010 1001|如果你们有更好的贴图,尽管发给我呀😉",
	"0010 1010|瞄准好长按让唐斯雨飞得更远",
	"0010 1011|英语考纲词抄到哪了?",
	"0010 1100|'@所有人 晚托课测试，晚放10分钟，16:40放'",
	"0010 1101|罗鸡鸡甲流了,他在MC里用石剑打我,在WC里和马桶作伴",
	"0010 1110|你们怎么都不打游戏,光看'有用的提示'了?",
	"0010 1111|游戏名叫0101 0101,意思就是...🤪",
	"0011 0000|我写会作业去",
	"0011 0001|建议吃饭的时候不要看,因为容易吃不着饭",
	"0011 0010|别想了,没有你以为的😘",
	"0011 0011|我这个人主打正直,绝对💩不会💩在💩吃饭💩的💩时候💩放个💩的",
	"0011 0100|想要美女陪你打徐志豪吗?那就把唐斯雨换掉!",
	"0011 0101|有什么不满意给我打电话,号码是",
	"0011 0110|188(0011 0110=54)",
	"0011 0111|或许班长还没搞清楚二进制吧😏",
	"0011 1000|ok写完作业了,22:00",
	"0011 1001|💩💩💩💩💩💩💩💩💩",
	"0011 1010|是不是很突然?",
	"0011 1011|要不是贴图不太够 我肯定不只放一种徐志豪",
	"0011 1100|过去了600秒,约合10分钟",
	"0011 1101|egg里也有唐斯雨很想知道的东西哦~",
	"0011 1110|透露一下 我从小学其实就开始打台球",
	"0011 1111|你有没有数过一共有多少徐志豪?",
	"0100 0000|想看梦泪吗?去egg里看",
	"0100 0001|这游戏还缺点音效,我想你们有吧😁",
	"0100 0010|这一行代码已经打了我2000个字了!",
	"0100 0011|'高大,威武,帅气,才华横溢,学识渊博'",
	"0100 0100|罗鸡鸡,穿花衣,年年春天来这里",
	"0100 0101|疯狂疯狂星期四,所有鸡鸡九块九",
	"0100 0110|北京时间2023/12/25 00:00:01",
	"0100 0111|好的,祝你们剩蛋截快乐,截的就剩蛋了",
	"0100 1000|这个礼拜狗弟当门神,小心被他的大龅牙攻击!",
	"0100 1001|注意老师!",
	"0100 1010|杰哥发言:'经过阿东同志到上海的调研，我深刻认识到我们应该用实际行动来贯彻习近平书记对我们这代青年的嘱托，成为一位有理想，有担当，肯吃苦，勤奋努力的新时代好青年'",
	"0100 1011|鸟天!冻死了!",
	"0100 1100|唐斯雨发言:'通过共青团中央书记处第一书记阿东同志到上海的调研，我明白了要在学习中学思践悟，在宣讲中示范引领，在实践中再立新功。青春点亮城市，科技照亮未来！踔力奋发，不负韶华！'",
	"0100 1101|💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩",
	"0100 1110|Delicious~",
	"0100 1111|[12/24 15:28]出生.:'古外'",
	"0101 0000|800秒!约合13.3分钟,0.22小时,0.009天,800000毫秒,800000000微秒,0.001323周,0.000025年!!!",
	"0101 0001|Work up,你别告诉我都到现在了还没打完所有徐志豪",
	"0101 0010|你猜到游戏名的意思了吗",
	"0101 0011|知道你们意犹未尽💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩",
	"0101 0100|准备按F5刷新吧 我懒,没做重置的按钮",
	"0101 0101|其实'0101 0101'=85,就是85个'有用的提示',这是第85个"];
var table, 
	cueBall,
	guideBall, 
	dotWrap, 
	speed = 12,
	rollUp = 0,
	rollRight = 0,
	timer,
	forceTimer,
	balls = [],
	movingBalls = [],
	pokes = [[0,0],[W/2,-5],[W,0],[0,H],[W/2,H+5],[W,H]],
	hasShot = false;
	shots = 0; 
	
window.onload = function() {
	initTable();
	initShootPos();
	showTips();
	startGame();
}

function startGame() {
	initBall();
	addEventHandler(table,"mousemove",dragCueBall);
	addEventHandler(table,"mouseup",setCueBall);
}

function initTable() {
	table = $("table");
	var dotWrapDiv = document.createElement("div"),
		guideBallDiv = document.createElement("div");
	dotWrapDiv.id = "dotWrap";
	guideBallDiv.className = "guide ball";
	setStyle(guideBallDiv,"display","none");
	dotWrap = table.appendChild(dotWrapDiv);
	guideBall = table.appendChild(guideBallDiv);
}

function initBall() {
	cueBall = new Ball("cue",170,H/2);
	balls.push(cueBall);
	for(var i = 0; i < 5; i++) {
		for(var j = 0; j <= i; j++)	{
			var ball = new Ball("target",520 + i*2*R, H/2 - R*i + j*2*R);
			balls.push(ball);
		}
	}
}

function initShootPos() {
	var wrap = $("shootPos"),
		handler = $("dot"),
		arrowR = 18;
	addEventHandler(wrap,"mousedown",selectDot);
	function selectDot(e) {
		e = e || event;
		var pos = getElemPos(wrap),
			x = e.clientX - pos[0] - handler.offsetWidth/2,
			y = e.clientY - pos[1] - handler.offsetHeight/2;
			
		if(Math.sqrt((x-22)*(x-22) + (y-22)*(y-22)) > arrowR) {
			var angle = Math.atan2(x-22,y-22);
			x = arrowR*Math.sin(angle) + 22;
			y = arrowR*Math.cos(angle) + 22;
		}
		setPos(handler,x,y);		
	}
}

function getElemPos(target,reference) {
	reference = reference || document;
	var left = 0,top = 0;
	return getPos(target);
	function getPos(target) {
		if(target != reference) {
			left += target.offsetLeft;
			top += target.offsetTop;
			return getPos(target.parentNode);
		} else {
			return [left,top];
		}
	}
}

function Ball(type,x,y) {
	var div = document.createElement("div");
	div.className = type + " ball";
	this.elem = table.appendChild(div);
	this.type = type;
	this.x = x;
	this.y = y;
	this.angle = 0;
	this.v = 0; 
	setBallPos(this.elem,x,y);
	return this;
}

function setCueBall() {
	removeEventHandler(table,"mousemove",dragCueBall);
	removeEventHandler(table,"mouseup",setCueBall);
	startShot();
}

function startShot() {
	show(cueBall.elem);
	addEventHandler(table,"mousemove",showGuide);
	addEventHandler(table,"mousedown",updateForce);
	addEventHandler(table,"mouseup",shotCueBall);
	
}

function dragCueBall(e) {
	var toX,toY;
	e = e || event;
	toX = e.clientX - table.offsetLeft - THICKNESS,
	toY = e.clientY - table.offsetTop - THICKNESS;
	
	toX = toX >= R ? toX : R;
	toX = toX <= 170 ? toX : 170;
	toY = toY >= R ? toY : R;
	toY = toY <= H - R ? toY : H - R;
		
	setBallPos(cueBall,toX,toY);
}

function shotCueBall() {
	removeEventHandler(table,"mousemove",showGuide);
	removeEventHandler(table,"mousedown",updateForce);
	removeEventHandler(table,"mouseup",shotCueBall);
	window.clearInterval(forceTimer);
	speed = $("force").offsetWidth * 0.15;
	var dotDisX = $("dot").offsetLeft-22,
		dotDisY = $("dot").offsetTop-22,
		dotDis = Math.sqrt(dotDisX*dotDisX + dotDisY*dotDisY),
		dotAngle = Math.atan2(dotDisX,dotDisY);
	rollRight = Math.round(dotDis*Math.sin(dotAngle))/5;
	rollUp = -Math.round(dotDis*Math.cos(dotAngle))/5;

	var formPos = getBallPos(cueBall.elem),
		toPos = getBallPos(guideBall),
		angle = Math.atan2(toPos[0] - formPos[0],toPos[1] - formPos[1]);
		
	hide(dotWrap);
	hide(guideBall);
	cueBall.v = speed;
	cueBall.angle = angle;
	movingBalls.push(cueBall);
	
	timer = window.setInterval(roll,1000 / RATE);
}

function showGuide(e) {
	var fromX,fromY,toX,toY;
	e = e || event;
	toX = e.clientX - table.offsetLeft - THICKNESS,
	toY = e.clientY - table.offsetTop - THICKNESS;
	setBallPos(guideBall,toX,toY);
	show(dotWrap);
	show(guideBall);
	drawLine();
	
	function drawLine() {
		var dotNum = 16,
			pos = getBallPos(cueBall.elem);
		dotWrap.innerHTML = "";
		fromX = pos[0];
		fromY = pos[1];
		var partX = (toX - fromX) / dotNum,
			partY = (toY - fromY) / dotNum;
		for(var i = 1; i < dotNum; i++) {
			var x = fromX + partX * i,
				y = fromY + partY * i;
			drawDot(dotWrap, x, y);
		}		
	}
}

function roll() {
	if(movingBalls.length <= 0) {
		if(!hasShot) shots = 0;
		else shots ++; 

		hasShot = false;
		setStyle($("force"),"width",80+"px");
		setPos($("dot"),22,22);		
		window.clearInterval(timer);
		
		if(shots > 1) showScore(shots); 
		startShot();
	}
	for(var i = 0; i < movingBalls.length; i++) {
		var ball = movingBalls[i],
			sin = Math.sin(ball.angle),
			cos = Math.cos(ball.angle);
		ball.v -= F;
		if(Math.round(ball.v) == 0) {
			ball.v = 0;
			movingBalls.remove(i);
			continue;	
		}
		var vx = ball.v * sin,
			vy = ball.v * cos;
		ball.x += vx;
		ball.y += vy;
				
		if(isPocket(ball.x,ball.y)) {
			hide(ball.elem);
			
			if(ball.type == "cue") {
					if(!hasShot) shots = 0;
					hasShot = false;

				window.setTimeout(function(){
				
					ball.v = 0;	
					setBallPos(ball,170,250);
					
				},500);

			}else {
				hasShot = true;
				ball.v = 0;	
				for(var k = 0, l =0; k < balls.length; k++) {
					if(balls[k] != ball) {
						balls[l++] = balls[k];
					}
				}
				balls.length -= 1;
			}
			return;
		}
		
		if(ball.x < R || ball.x > W - R) {
			ball.angle *= -1;
			ball.angle %= Math.PI;
			ball.v = ball.v * (1 - LOSS);
			vx = ball.v*Math.sin(ball.angle);
			vy = ball.v*Math.cos(ball.angle);
			if(ball.x < R) ball.x = R;
			if(ball.x > W - R) ball.x = W - R;
			if(ball.type == "cue")	{
				if(ball.angle > 0) vy -= rollRight;
				else vy += rollRight;
				vx += rollUp;
				rollUp *= 0.2;
				rollRight *= 0.2;
				ball.v = Math.sqrt(vx*vx + vy*vy);
				ball.angle = Math.atan2(vx,vy);
			}				
		}
		if(ball.y < R || ball.y > H - R) {
			ball.angle = ball.angle > 0 ? Math.PI - ball.angle : - Math.PI - ball.angle ;
			ball.angle %= Math.PI;
			ball.v = ball.v * (1 - LOSS);
			vx = ball.v*Math.sin(ball.angle);
			vy = ball.v*Math.cos(ball.angle);
			if(ball.y < R) ball.y = R;
			if(ball.y > H - R) ball.y = H - R;	
			if(ball.type == "cue")	{
				if(Math.abs(ball.angle) < Math.PI/2) vx += rollRight;
				else vx -= rollRight;
				vy += rollUp;
				rollUp *= 0.2;
				rollRight *= 0.2;
				ball.v = Math.sqrt(vx*vx + vy*vy);
				ball.angle = Math.atan2(vx,vy);
			}					
		}
		
		for(var j = 0; j < balls.length; j++) {
			var obj = balls[j];
			if(obj == ball) continue;
			var disX = obj.x - ball.x,
				disY = obj.y - ball.y,
				gap = 2 * R;
			if(disX <= gap && disY <= gap) {
				var dis = Math.sqrt(Math.pow(disX,2)+Math.pow(disY,2));
				if(dis <= gap) {
					if(Math.round(obj.v) == 0)	
					movingBalls.push(obj);
					ball.x -= (gap - dis)*sin;
					ball.y -= (gap - dis)*cos;
					disX = obj.x - ball.x;
					disY = obj.y - ball.y;
					
					var angle = Math.atan2(disY, disX),
						hitsin = Math.sin(angle),
						hitcos = Math.cos(angle),
						objVx = obj.v * Math.sin(obj.angle),
						objVy = obj.v * Math.cos(obj.angle);
						
					var x1 = 0,
						y1 = 0,
						x2 = disX * hitcos + disY * hitsin,
						y2 = disY * hitcos - disX * hitsin,
						vx1 = vx * hitcos + vy * hitsin,
						vy1 = vy * hitcos - vx * hitsin,
						vx2 = objVx * hitcos + objVy * hitsin,
						vy2 = objVy * hitcos - objVx * hitsin;
					
					var plusVx = vx1 - vx2;
					vx1 = vx2;
					vx2 = plusVx + vx1;
					
					if(ball.type == "cue")	{
						vx1 += rollUp;
						rollUp *= 0.2;
					}				
					
					x1 += vx1;
					x2 += vx2;
					
					var x1Final = x1 * hitcos - y1 * hitsin,
						y1Final = y1 * hitcos + x1 * hitsin,
						x2Final = x2 * hitcos - y2 * hitsin,
						y2Final = y2 * hitcos + x2 * hitsin;
					obj.x = ball.x + x2Final;
					obj.y = ball.y + y2Final;
					ball.x = ball.x + x1Final;
					ball.y = ball.y + y1Final;
					
					vx = vx1 * hitcos - vy1 * hitsin;
					vy = vy1 * hitcos + vx1 * hitsin;
					objVx = vx2 * hitcos - vy2 * hitsin;
					objVy = vy2 * hitcos + vx2 * hitsin; 
					
					ball.v = Math.sqrt(vx*vx + vy*vy) * (1 - 0);
					obj.v = Math.sqrt(objVx*objVx + objVy*objVy) * (1 - 0);
					
					ball.angle = Math.atan2(vx , vy);
					obj.angle = Math.atan2(objVx , objVy);	
				}
			}
		}
				
		setBallPos(ball,ball.x,ball.y);	
	}
}

function isPocket(x,y) {
	if(y < POKER) return check(0,2);
	else if (y > H - POKER) return check(3,5);
	else return false;
	
	function check(m,n) {
		for(var i=m; i<=n; i++) {
			if(x >= pokes[i][0] - POKER && x <= pokes[i][0] + POKER) {
				var dis = Math.sqrt(Math.pow(x - pokes[i][0],2) + Math.pow(y - pokes[i][1],2));
				if(dis <= POKER) return true;
				else return false;
			}
		}	
	} 
	
}

function getBallPos(obj) {
	var pos = [];
	pos.push(obj.offsetLeft - THICKNESS + TOTALR);
	pos.push(obj.offsetTop - THICKNESS + TOTALR);
	return pos;
}

function setPos(obj,x,y) {
	obj.style.left = x + "px";
	obj.style.top = y + "px";
}

function setBallPos(ball,x,y) {
	if(ball.constructor == Ball) {
		ball.x = x;
		ball.y = y;
		ball = ball.elem;
	}
	setPos(ball,x + THICKNESS - TOTALR,y + THICKNESS - TOTALR);
}

function drawDot(wrap,x,y) {
	var elem = document.createElement("div");
	setStyle(elem,{
		position: "absolute",
		width: "1px",
		height: "1px",
		fontSize: "1px",
		background: "white"
	});
	setPos(elem,x,y);
	wrap.appendChild(elem);
}

function updateForce() {
	var obj = $("force"),
		len = 80,
		up = true;
	forceTimer = window.setInterval(update,10);
	
	function update() {
		 if(up) setStyle(obj,"width",len+++"px");
		 else setStyle(obj,"width",len--+"px");
		 if(len > 136) up = false;
		 if(len <= 0) up = true;
	}
	
}

function setStyle() {
	if(arguments.length == 2 &&  typeof arguments[1] == "object") {
		for(var key in arguments[1]) {
			arguments[0].style[key] = arguments[1][key];
		}
	} else if (arguments.length > 2) {
		arguments[0].style[arguments[1]] = arguments[2];
	}
}

function hide(obj) {
	setStyle(obj,"display","none");
}

function show(obj) {
	setStyle(obj,"display","block");
}
function trace(sth,who) {
	who = who || $("tips");
	if(document.all) who.innerText = sth;
	else who.textContent = sth;
	return who;
}

function showScore(n) {
	var wrap = $("scoreBoard");
	trace(n+"sCoRe",wrap);
	fadeIn(wrap);
}

function fadeIn(obj){
	var fromY = 230,
		posStep = [8,14,19,23,26,28,29,29,30,30,30],
		opaStep = [0,0.05,0.1,0.15,0.2,0.25,0.3,0.4,0.5,0.6,0.8],
		fromOpa = 0,
		t = 0,
		step = posStep.length,
		inTimer = window.setInterval(showIn,20),
		outTimer;
	
	function showIn() {
		setOpacity(obj,opaStep[t]);
		obj.style.top = fromY + posStep[t] + "px";
		t++;
		if(t>=step) {
			window.clearInterval(inTimer);
			outTimer = window.setInterval(fadeOut,50);
		}	
	}
	
	function fadeOut() {
		t--;
		setOpacity(obj,opaStep[t]);
		obj.style.top = fromY + posStep[t] + "px";
		if(t <= 0) {
			window.clearInterval(outTimer);
			hide(obj);
		}
	}
	
}

function setOpacity(obj,n) {
	obj.style.cssText = "filter:alpha(opacity="+ n*100 +"); -moz-opacity:"+ n +"; opacity:"+ n;
}

function showTips() {
	var i = 0;
	tip();
	window.setInterval(tip,10000);
	
	function tip() {
		trace(TIPS[i++]);
		if(i >= TIPS.length) i = 0;
	}
}
// 新增功能 只追加，不修改原有台球任何函数
let musicOn = true;
const audio1 = $("audio1"); // bgm
const audio2 = $("audio2"); // 击球
const audio3 = $("audio3"); // 进球
const musicToggle = $("musicToggle");
const musicIcon = $("musicIcon");
let bgmUnlocked = false;

// 统一播放函数
function playAudio(audioDom) {
    if (!musicOn || !audioDom) return;
    audioDom.currentTime = 0;
    audioDom.play().catch(err => {});
}

// 全局任意点击解锁音频（修复bgm变量错误）
document.addEventListener("click", function unlockBgm() {
    if (!bgmUnlocked) {
        bgmUnlocked = true;
        audio1.loop = true;
        if (musicOn) {
            audio1.play().catch(() => {});
        }
    }
}, { once: true });

// 音乐开关按钮
if (musicToggle) {
    addEventHandler(musicToggle, "click", () => {
        musicOn = !musicOn;
        if (musicOn) {
            musicIcon.src = "../index/music_on.png";
            audio1.volume = audio2.volume = audio3.volume = 1;
            // 解锁后立刻播放bgm
            if (bgmUnlocked) playAudio(audio1);
        } else {
            musicIcon.src = "../index/music_off.png";
            audio1.volume = audio2.volume = audio3.volume = 0;
            audio1.pause();
        }
    })
}

// 返回按钮
addEventHandler($("backBtn"), "click", () => window.location.href = "../buy.html");

// 详情弹窗逻辑
const detailModal = $("detailModal");
const detailBtn = $("detailBtn");
const closeDetailBtn = $("closeDetailBtn");
const detailTitle = $("detailTitle");
const detailContent = document.querySelector(".detailContent");
const detailText = {
    name: "桌球游戏",
    price: "¥4.9",
    desc: "你可以修改的部分：背景图、贴图、背景音乐、击球音效等"
};
function renderDetail() {
    trace(detailText.name, detailTitle);
    detailContent.innerText = `价格：${detailText.price}\n${detailText.desc}`;
}
renderDetail();
addEventHandler(detailBtn, "click", () => detailModal.style.display = "block");
addEventHandler(closeDetailBtn, "click", () => detailModal.style.display = "none");
addEventHandler(detailModal, "click", e => {
    if (e.target === detailModal) detailModal.style.display = "none";
});

// 音效钩子，不改动原游戏代码
const originStartGame = startGame;
startGame = function () {
    originStartGame();
};
const originShotCueBall = shotCueBall;
shotCueBall = function () {
    originShotCueBall();
    playAudio(audio2);
};
const originIsPocket = isPocket;
isPocket = function (x, y) {
    let hit = originIsPocket(x, y);
    if (hit) playAudio(audio3);
    return hit;
};
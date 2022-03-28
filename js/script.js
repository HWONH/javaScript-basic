// 한 줄 주석 처리방법
/* 
    여러 줄 주석 처리방법
    여러 줄 주석 처리방법
    여러 줄 주석 처리방법
*/
// 01. 문서상의 표현
document.write("안녕하세요", "<br>");
// 문서에 ("안녕하세요") 작성해라 / ,의 의미 : and 개념 / ;의 의미 : 코드는 여기까지임
document.write("자바스크립트, 제이쿼리 강의입니다.", "<br>");
document.write("9시반 ~ 6시반"+"<br>"); // +의 의미 : and 개념

// 02. 변수 : 언제든지 변할 수 있는 수(데이터), 데이터에 대한 변경 가능
var a = 17; // 변수의 초기화(초기 셋팅)
document.write("a라는 그릇에 담겨진 데이터 값 : " + a, "<br>");
a = 24; // 데이터 값을 변경하는 재할당
document.write("변수 a의 그릇에 담겨진 최종 데이터 값 : " + a + "<br>");

var bob = "자장면";
bob = "짬뽕";
bob = "유산슬";
document.write("무적의 신입사원이 시킨 메뉴 : " + bob + "<br>");

// 03. 자바스크립트의 환경적 요인(경고창, 확인창, 질문창)
// 03-01. 경고창(사용자의 상황에 대한 경고 메시지를 표현, 브라우저 팝업창)
// alert("이곳은 경고창입니다.");

// 03-02. 확인창(사용자에게 확인 또는 취소여부를 인지시킬 때 사용, 회원탈퇴시 확인여부를 묻는다)
// confirm("확인 여부를 물을 때");

// 03-03. 질문창(질의 응답창)
// <input type="text" placeholder="미리보기 내용" value="서울시 서초구...">
// prompt("당신의 이름은?", "홍길동");
// prompt("질문내용", "답변에 대한 초기값");
// prompt("질문내용", "");

// 04. console 창(검사창 내부에 존재)

console.log("진행사항 완료");
console.log("안녕하세요"); // log의 이미 : 기록
console.log(bob);
/* 
<콘솔창을 사용해야하는 이유>
1. 실제 데이터 값이 어떤 것인지를 확인하고자 할 때 사용 ex) console.log(bob);
2. 에러메시지를 확인 가능
3. 스크립트 파트에서 어디까지 진행이 되었는지를 확인할 때
    console.log("진행사항 완료"); 문장을 에러가 발생할 수 있는 위치에 배치하여 진행여부를 확인
*/

// 05. 변수 선언
var msg;    // 초기 변수명만 선언
msg = "오늘 뭐할래?";    // 기본에 선언된 변수명에 데이터를 담는다
document.write(msg, "<br>"); // 화면상에 출력

var your_msg = "집에가자"; // 초기 변수명부터 데이터를 담는다
document.write(your_msg, "<br>");

// 06. 변수명 작성시 주의사항
// 06-01. 대소문자를 구별
var num = 7;
// document.write(Num, "<br>");
document.write(num, "<br>");

// 06-02. 변수명의 첫 글자에는 영문, _, $만 가능(숫가 불가능)
var _txt = 14;
document.write(_txt, "<br>");
var $txt = "오늘 날씨 맑음";
document.write($txt, "<br>");

// 06-03. 변수명 내부에는 영문, 숫자, _, $만 가능
var num_str = "변수 선언명";
document.write(num_str, "<br>");
var num01 = 27;
document.write(num01, "<br>");

// 06-04. 자바스크립트 관련 예약어 사용금지
var $document = "문서 예약어";
document.write($document, "<br>");

// 07. 문자형 데이터 : 큰따옴표("") 또는 작은따옴표('')로 감싸주는 형태
var $str_01 = "자바스크립트";
document.write($str_01, "<br>");
var $str_02 = "10000"; // 사칙연산 불가능
document.write($str_02, "<br>");
var $str_03 = "<h1 class='font_red'>문단 타이틀 태그</h1>"; // 문자형 데이터가 ""이므로 h1 태그 클래스명은 ''로 구분한다
document.write($str_03, "<br>");

// 08. 숫자형 데이터 : 숫자를 데이터 값으로 지정한 형태
// 문자형데이터 존재, 사칙연산 불가능
var $num_01 = 24;
var $num_02 = "12";
document.write($num_01 + $num_02, "<br>"); // 2412
// 문자형데이터를 숫자형데이터로 변환, 사칙연산 가능
var $num_01 = 24;
var $num_02 = Number("12"); // "12"라는 문자형데이터를 숫자형데이터로 변환(명시적 형변환)
document.write($num_01 + $num_02, "<br>"); //36

// 09. 논리형 데이터 : true 또는 false, Boolean("유효값") => true, Boolean("") => false
var ischk = true;
document.write(ischk, "<br>"); // true
var $than = 16<12;
document.write($than, "<br>"); // false
var $value = Boolean("아이디명"); // Boolean("아이디명") : 값이 존재한다면, true
document.write($value, "<br>"); // true
var $value = Boolean(""); // Boolean("") : 값이 없다면, false
document.write($value, "<br>"); // false

// 10. 초기 변수명만 선언되고 아직 데이터 값이 존재하지 않은 상태 : undefined
var $detail;
document.write($detail, "<br>");

// 11. 값이 없음을 선언 : null
var $nullData = null;
document.write($nullData, "<br>");

// 12. 데이터의 형태를 파악할 수 있는 typeof 변수명
var $str_type = "빙그레 바나나";
document.write(typeof $str_type, "<br>"); // string(문자형 데이터)
var $num_type = 42;
document.write(typeof $num_type, "<br>"); // number(숫자형 데이터)

var $num_type_02 = "37";
document.write(typeof $num_type_02, "<br>"); // string
var $num_type_02 = Number("37");
document.write(typeof $num_type_02, "<br>"); // number

var $bool_type = true; // 논리형 데이터
document.write(typeof $bool_type, "<br>"); //boolean
var $bool_type = false; // 논리형 데이터
document.write(typeof $bool_type, "<br>"); //boolean

var $undefined_type;
document.write(typeof $undefined_type, "<br>"); // undefined
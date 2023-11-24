여러 typescript file을 한번에 컴파일
index.html의 script추가
tsc --init
tsc -w

tsconfig.json
"complierOptions"
    - 컴파일러 작동 방식의 구성

    "target":
        - 어떤 자바스크립트 버전으로 컴파일 할지

    "lib":
        - 설정하지 않을 경우 target의 모든 기능이 default

    "allowJs":
        - 자바스크립트 파일을 같이 컴파일

    "checkJs":
        - 자바스크립트 파일의 syntax error

    "sourceMap":
        - 브라우저에서 타입스크립트 파일을 확인 할 수 있음
        
"exclude": [
    "파일명.ts",
    "node_modules"//default
  ]
    - 컴파일시 제외할 파일

"include": [
    "파일명.ts"
]
    - 컴파일 시 반드시 컴파일 할 파일

"files": {
    "파일명.ts"
}
    - 컴파일 하려는 개별 파일만 지정 가능(폴더X) 
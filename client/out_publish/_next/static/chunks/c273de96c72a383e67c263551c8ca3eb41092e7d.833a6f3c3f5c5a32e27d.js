(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"87fz":function(e,t,i){"use strict";i("o0o1");var s=i("nKUr");t.a=function(e){return Object(s.jsxs)("div",{class:"relative pt-1",children:[Object(s.jsx)("div",{className:"flex mb-2 items-center justify-between",children:Object(s.jsx)("div",{className:"text-right",children:Object(s.jsxs)("span",{className:"text-xs font-semibold inline-block text-white",children:[e.value,"%"]})})}),Object(s.jsx)("div",{className:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-white",children:Object(s.jsx)("div",{style:{width:e.value+"%"},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-"+e.color+"-800"})})]})}},YFqc:function(e,t,i){e.exports=i("cTJO")},cTJO:function(e,t,i){"use strict";var s=i("J4zp"),o=i("284h");t.__esModule=!0,t.default=void 0;var a=o(i("q1tI")),n=i("elyg"),r=i("nOHt"),l=i("vNVm"),c={};function u(e,t,i,s){if((0,n.isLocalURL)(t)){e.prefetch(t,i,s).catch((function(e){0}));var o=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;c[t+"%"+i+(o?"%"+o:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,i=(0,r.useRouter)(),o=i&&i.pathname||"/",p=a.default.useMemo((function(){var t=(0,n.resolveHref)(o,e.href,!0),i=s(t,2),a=i[0],r=i[1];return{href:a,as:e.as?(0,n.resolveHref)(o,e.as):r||a}}),[o,e.href,e.as]),d=p.href,h=p.as,f=e.children,m=e.replace,g=e.shallow,x=e.scroll,v=e.locale;"string"===typeof f&&(f=a.default.createElement("a",null,f));var b=a.Children.only(f),y=b&&"object"===typeof b&&b.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),N=s(w,2),C=N[0],A=N[1],j=a.default.useCallback((function(e){C(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,C]);(0,a.useEffect)((function(){var e=A&&t&&(0,n.isLocalURL)(d),s="undefined"!==typeof v?v:i&&i.locale,o=c[d+"%"+h+(s?"%"+s:"")];e&&!o&&u(i,d,h,{locale:s})}),[h,d,A,v,t,i]);var q={ref:j,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,i,s,o,a,r,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,n.isLocalURL)(i))&&(e.preventDefault(),null==r&&(r=s.indexOf("#")<0),t[o?"replace":"push"](i,s,{shallow:a,locale:l}).then((function(e){e&&r&&(window.scrollTo(0,0),document.body.focus())})))}(e,i,d,h,m,g,x,v)},onMouseEnter:function(e){(0,n.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(i,d,h,{priority:!0}))}};return(e.passHref||"a"===b.type&&!("href"in b.props))&&(q.href=(0,n.addBasePath)((0,n.addLocale)(h,"undefined"!==typeof v?v:i&&i.locale,i&&i.defaultLocale))),a.default.cloneElement(b,q)};t.default=p},"iWZ+":function(e){e.exports=JSON.parse('{"outline":["Number Sense and Algebra","Linear Relations","Analytic Geometry","Measurement and Geometry"],"strand":{"number-sense-and-algebra":{"title":"Number Sense and Algebra","skillGroups":[{"id":"NSA1","title":"Operating with Exponents","slug":"operating-with-exponents","description":"Exponent rules of multiplication and division"},{"id":"NSA2","title":"Solving Equations","slug":"manipulating-expressions-solving-equations"}]},"linear-relations":{"title":"Linear Relations","skillGroups":[{"id":"LR1","title":"Data Management Techniques","slug":"using-data-management-to-investigate-relationships"},{"id":"LR2","title":"Characteristics of Linear Relations","slug":"understanding-characteristics-of-linear-relations"},{"id":"LR3","title":"Representations of Linear Relations","slug":"connecting-various-representations-of-linear-relations"}]},"analytic-geometry":{"title":"Analytic Geometry","skillGroups":[{"id":"AG1","title":"Equation of a Relation and the Shape of its Graph","slug":"investigating-the-relationship-between-the-equation-of-a-relation-and-the-shape-of-its-graph"},{"id":"AG2","title":"Properties of a Slope","slug":"investigating-the-properties-of-a-slope"},{"id":"AG3","title":"Properties of Linear Relations","slug":"properties-of-linear-relations"}]},"measurement-geometry":{"title":"Measurement and Geometry","skillGroups":[{"id":"MG1","title":"Optimal Values of Measurements","slug":"optimal-values-of-measurements"},{"id":"MG2","title":"Perimeter Area Surface Area and Volume","slug":"perimeter-area-surface-area-and-volume"},{"id":"MG3","title":"Geometric Relationships","slug":"geometric-relationships"}]}},"skillGroups":{"operating-with-exponents":{"title":"Operating with Exponents","skills":[{"id":"NA1-01","title":"Exponent Basics","description":"Evaluate expressions involving natural-number exponents with rational-number bases"},{"id":"NA1-02","title":"Length, area, and volume using exponents","description":"[i.e., length, which is one dimensional, can be represented by x ; area, which is two dimensional, can be represented by (x)(x) or x2; volume, which is three dimensional, can be represented by (x)(x)(x),(x2)(x), or x3 ]"},{"id":"NA1-03","title":"Exponent rules for multiplication and division","description":"apply these rules in expressions involving one and two variables with positive exponents"},{"id":"NA1-04","title":"Power of a power rule","description":"apply it to simplify expressions involving one and two variables with positive exponents"}]},"manipulating-expressions-solving-equations":{"title":"Solving Equations","skills":[{"id":"NA2-01","title":"Simplify Numerical Expressions","description":"simplify numerical expressions involving integers and rational numbers, with and without the use of technology"},{"id":"NA2-02","title":"Percent, Ratio, Rate, and Proportion","description":"Solve problems requiring the manipulation of expressions arising from applications of percent, ratio, rate, and proportion"},{"id":"NA2-03","title":"Square and Square Root","description":"relate their understanding of inverse operations to squaring and taking the square root, and apply inverse operations to simplify expressions and solve equations"},{"id":"NA2-04","title":"Add and Subtract Polynomials","description":"add and subtract polynomials with up to two variables [e.g., (2x \u2013 5) + (3x + 1), (3x2y + 2xy2) + (4x2y \u2013 6xy2)], using a variety of tools (e.g., algebra tiles, computer algebra systems, paper and pencil)"},{"id":"NA2-05","title":"Multiply Polynomial and Monomial","description":" multiply a polynomial by a monomial involving the same variable [e.g., 2x(x + 4),2x2(3x2 \u2013 2x + 1)], using a variety of tools (e.g., algebra tiles, diagrams,computer algebra systems, paper and pencil)"},{"id":"NA2-06","title":"Simplify Polynomials","description":" expand and simplify polynomial expressions involving one variable [e.g., 2x(4x + 1) \u2013 3x(x + 2)], using a variety of tools (e.g., algebra tiles, computer algebra systems, paper and pencil)"},{"id":"NA2-07","title":"First Degree Equations","description":"solve first-degree equations, including equations with fractional coefficients, using a variety of tools (e.g., computer algebra systems, paper and pencil) and strategies(e.g., the balance analogy, algebraic strategies)"},{"id":"NA2-08","title":"Rearranging Formulas","description":" rearrange formulas involving variables in the first degree, with and without substitution (e.g., in analytic geometry, in measurement) ( Sample problem: A circular garden has a circumference of 30 m. What is the length of a straight path that goes through the centre of this garden?)"},{"id":"NA2-09","title":"Solving Problems","description":"solve problems that can be modelled with first-degree equations, and compare algebraic methods to other solution methods (Sample problem: Solve the following problem in more than one way: Jonah is involved in a walkathon. His goal is to walk 25 km. He begins at 9:00 a.m. and walks at a steady rate of 4 km/h. How many kilometres does he still have left to walk at 1:15 p.m. if he is to achieve his goal?"}]}},"skills":{"NA1-01":{"title":"Exponent Basics","description":"You should be able to evaluate expressions involving natural-number exponents with rational-number bases","sourceId":"XZRQhkii0h0"},"NA1-02":{"title":"Length, area, and volume using exponents","description":"Length, which is one dimensional, can be represented by x ; area, which is two dimensional, can be represented by (x)(x) or x^2; volume, which is three dimensional, can be represented by (x)(x)(x),(x2)(x), or x^3","sourceId":"uJ49XUGhejw"},"NA1-03":{"title":"Exponent rules for multiplication and division","description":"Apply these rules in expressions involving one and two variables with positive exponents","sourceId":"7gZBCTw2EmI"},"NA1-04":{"title":"Exponent rules for power of power","description":"Apply it to simplify expressions involving one and two variables with positive exponents","sourceId":"39l-MZFUEzY"},"NA2-01":{"title":"Simplify Numerical Expressions","description":"Simplify numerical expressions involving integers and rational numbers, with and without the use of technology","sourceId":"aR6phzMLuKM"},"NA2-02":{"title":"Percent, Ratio, Rate, and Proportion","description":"Solve problems requiring the manipulation of expressions arising from applications of percent, ratio, rate, and proportion","sourceId":"HpdMJaKaXXc"},"NA2-03":{"title":"Square and Square Root","description":"Relate their understanding of inverse operations to squaring and taking the square root, and apply inverse operations to simplify expressions and solve equations","sourceId":"S3IEeCyUWWA"},"NA2-04":{"title":"Add and Subtract Polynomials","description":"Add and subtract polynomials with up to two variables [e.g., (2x \u2013 5) + (3x + 1), (3x2y + 2xy2) + (4x2y \u2013 6xy2)], using a variety of tools (e.g., algebra tiles, computer algebra systems, paper and pencil)","sourceId":"PF5Y6yHm8FA"},"NA2-05":{"title":"Multiply Polynomial and Monomial","description":"Multiply a polynomial by a monomial involving the same variable [e.g., 2x(x + 4),2x2(3x2 \u2013 2x + 1)], using a variety of tools (e.g., algebra tiles, diagrams,computer algebra systems, paper and pencil)","sourceId":"nI-7On2adTs"},"NA2-06":{"title":"Simplify Polynomials","description":"Expand and simplify polynomial expressions involving one variable [e.g., 2x(4x + 1) \u2013 3x(x + 2)], using a variety of tools (e.g., algebra tiles, computer algebra systems, paper and pencil)","sourceId":"DKC74YKJpNY"},"NA2-07":{"title":"First Degree Equations","description":"Solve first-degree equations, including equations with fractional coefficients, using a variety of tools (e.g., computer algebra systems, paper and pencil) and strategies(e.g., the balance analogy, algebraic strategies)","sourceId":"GYNK6NDNEFk"},"NA2-08":{"title":"Rearranging Formulas","description":"Rearrange formulas involving variables in the first degree, with and without substitution (e.g., in analytic geometry, in measurement) ( Sample problem: A circular garden has a circumference of 30 m. What is the length of a straight path that goes through the centre of this garden?)","sourceId":"eTSVTTg_QZ4"},"NA2-09":{"title":"Solving Problems","description":"solve problems that can be modelled with first-degree equations, and compare algebraic methods to other solution methods (Sample problem: Solve the following problem in more than one way: Jonah is involved in a walkathon. His goal is to walk 25 km. He begins at 9:00 a.m. and walks at a steady rate of 4 km/h. How many kilometres does he still have left to walk at 1:15 p.m. if he is to achieve his goal?","sourceId":"qLJKZ0tPYTc"}},"practice":{"NA1-01":[{"question":"What is (9.8)^3","choices":[{"text":"96","isCorrect":false},{"text":"940","isCorrect":false},{"text":"941","isCorrect":true},{"text":"960","isCorrect":false}]},{"question":"What is 7^2","choices":[{"text":"25","isCorrect":false},{"text":"94360","isCorrect":false},{"text":"49","isCorrect":true},{"text":"42","isCorrect":false}]},{"question":"What is (1/2)^4","choices":[{"text":"1/2","isCorrect":false},{"text":"1/4","isCorrect":false},{"text":"1/8","isCorrect":false},{"text":"1/16","isCorrect":true}]}],"NA1-02":[{"question":"What is the volume of a cube (V = s^3) with a side length of 4","choices":[{"text":"64","isCorrect":true},{"text":"16","isCorrect":false},{"text":"256","isCorrect":false},{"text":"40","isCorrect":false}]},{"question":"What is the area of a square (A = s^2) with a side length of 8","choices":[{"text":"64","isCorrect":true},{"text":"16","isCorrect":false},{"text":"256","isCorrect":false},{"text":"40","isCorrect":false}]},{"question":"What is the volume of a cylinder (V = h * pi * r^2) with a height of 10 and radius of 5","choices":[{"text":"785","isCorrect":true},{"text":"780","isCorrect":false},{"text":"2000","isCorrect":false},{"text":"2090","isCorrect":false}]}],"NA1-03":[{"question":"Simplify x^3 * x^10","choices":[{"text":"x^7","isCorrect":false},{"text":"x^30","isCorrect":false},{"text":"x^13","isCorrect":true},{"text":"x^3","isCorrect":false}]},{"question":"Evaluate x^15 * x^(-20) * x^(5)","choices":[{"text":"1","isCorrect":true},{"text":"0","isCorrect":false},{"text":"Impossible to tell","isCorrect":false},{"text":"40","isCorrect":false}]},{"question":"If 2^a * 2^b = 64, then what are possible values for a and b?","choices":[{"text":"3 and 4","isCorrect":false},{"text":"2 and 4","isCorrect":true},{"text":"1 and 6","isCorrect":false},{"text":"6 and 4","isCorrect":false}]}],"NA1-04":[{"question":"What is ((9.8)^3)^2","choices":[{"text":"986","isCorrect":false},{"text":"85,842","isCorrect":false},{"text":"885,842","isCorrect":true},{"text":"685,842","isCorrect":false}]},{"question":"What is (7^2)^2","choices":[{"text":"2104","isCorrect":false},{"text":"1400","isCorrect":false},{"text":"2401","isCorrect":true},{"text":"490","isCorrect":false}]},{"question":"What is ((1/2)^2)^2","choices":[{"text":"1/2","isCorrect":false},{"text":"1/4","isCorrect":false},{"text":"1/8","isCorrect":false},{"text":"1/16","isCorrect":true}]}]}}')},vNVm:function(e,t,i){"use strict";var s=i("J4zp"),o=i("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!r,o=(0,a.useRef)(),c=(0,a.useState)(!1),u=s(c,2),p=u[0],d=u[1],h=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),i||p||e&&e.tagName&&(o.current=function(e,t,i){var s=function(e){var t=e.rootMargin||"",i=l.get(t);if(i)return i;var s=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return l.set(t,i={id:t,observer:o,elements:s}),i}(i),o=s.id,a=s.observer,n=s.elements;return n.set(e,t),a.observe(e),function(){a.unobserve(e),0===n.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[i,t,p]);return(0,a.useEffect)((function(){r||p||(0,n.default)((function(){return d(!0)}))}),[p]),[h,p]};var a=i("q1tI"),n=o(i("0G5g")),r="undefined"!==typeof IntersectionObserver;var l=new Map},zYID:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("nKUr"),o=i("YFqc"),a=i.n(o);function n(e){return Object(s.jsxs)("div",{className:"lg:px-16 px-6 bg-white flex flex-wrap items-center p-4",children:[Object(s.jsx)("div",{className:"flex-1 flex justify-between items-center",children:Object(s.jsx)(a.a,{href:"/",children:Object(s.jsx)("svg",{width:"32",height:"36",viewBox:"0 0 32 36",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"})})})}),Object(s.jsx)("label",{for:"menu-toggle",className:"pointer-cursor lg:hidden block",children:Object(s.jsxs)("svg",{className:"fill-current text-gray-900",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:[Object(s.jsx)("title",{children:"menu"}),Object(s.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})}),Object(s.jsx)("input",{className:"hidden",type:"checkbox",id:"menu-toggle"}),Object(s.jsxs)("div",{className:"hidden lg:flex lg:items-center lg:w-auto w-full",id:"menu",children:[Object(s.jsx)("nav",{}),Object(s.jsx)("a",{href:"#",className:"lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor",children:Object(s.jsx)("img",{className:"rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400",src:"https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg",alt:"Andy Leverenz"})})]})]})}}}]);
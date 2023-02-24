import SEO from "../components/SEO";

export default function Page() {
  return (
    <div>
      <SEO
        title={"Learning to Code Guide"}
        description={
          "This guide teaches you our top strategies for learning how to code"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex justify-center w-full p-4 bg-murkrow">
        <img src="/images/logo-dark.svg" className="w-36" />
      </div>
      <div className="p-16">
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Employees who can code have FAR more career growth and freedom than
            ones that don't
          </h1>
          <p className="pt-10 font-semibold text-center ">
            The system I provide in The Skillify Academy helps you learn to code
            in a way that eliminates stress and will impress employers. By
            simply working through our course content and meeting with our
            expert mentors, you instantly set yourself up for a career in tech.
          </p>
          <br />

          <p className="font-semibold text-center">
            This new approach to learning allows you to build a wide variety of
            websites and mobile applications for your personal portfolio while
            developing in-demand. valuable skills for your career — THAT WILL
            GET YOU PAID.
          </p>

          <div className="mt-16 bg-white">
            <h1 className="p-16 text-4xl font-bold text-center text-gray-900  ">
              Traditional coding bootcamps don't deliver on their promises
            </h1>
            <h2 className="mx-16 border-t-2  border-solid border-black-500"></h2>

            <div className="pt-16 pb-16 pl-16">
              <p className="font-bold">
                Because they realized that it was too easy to make a quick sale
                by selling a dream of wealth and freedom.
              </p>
              <br />
              <p className="">
                So instead of developing long-term customer relationships, older
                bootcamps invested in marketing instead of developing effective
                curriculum.
              </p>
              <br />
              <p className="">
                Skillify turns this thinking on its head by offering
                personalized coaching for a fraction of the cost. We invest in
                long-term relationships with our students so they return to us
                for coaching when they're ready to take the next steps in their
                career.
              </p>
              <br />
              <p className="">
                Skillify is more similar to a personal trainer than it is to a
                traditional bootcamp or university.
              </p>
            </div>
          </div>
          <div>
            <h1 className="pt-20 pb-16 text-4xl font-bold text-center text-gray-900">
              Building websites and mobile applications are the fastest way to
              get a job at your dream company... it's also the fastest way to
              get hired at ANY company
            </h1>
            <h2 className="mx-16 border-t-2 border-solid border-black-500"></h2>

            <h1 className="pt-20 pb-16 text-4xl font-bold text-center text-gray-900 ">
              What if you don't adapt ?
            </h1>
            <h2 className="mx-16 border-t-2  border-solid border-black-500"></h2>
            <h1 className="pt-20 pb-16 text-4xl text-center text-gray-900 ">
              We are in the midst of The Great Resignation
            </h1>
            <h2 className="mx-16 border-t-2 border-solid border-black-500"></h2>

            <p className="pt-16 text-center">
              <b>
                {" "}
                Old school companies who force employees to commute into an
                office are finding it harder and harder to keep top talent.
              </b>
            </p>

            <p className="pt-8 text-center">
              They continue to hope that their employees will be complacent and
              content with tiny raises that don't keep up with inflation.{" "}
            </p>
            <p className="pt-8 pb-8 text-center">
              But you and I both know that "hope" is never a good business
              decision.{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 p-16 pt-16 bg-white lg:grid-cols-2">
          <div id="image">
            <svg
              className="w-full"
              width="520"
              height="320"
              viewBox="0 0 520 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M165.891 114.045L162.594 115.095C162.552 114.915 162.504 114.736 162.449 114.556C162.021 113.179 161.828 115.654 160.717 114.736C160.797 115.923 159.089 103.72 158.924 104.893C158.855 105.387 159.452 113.562 159.338 114.045L133.731 114.29C133.876 111.823 132.562 112.772 131.4 110.594C130.713 112.641 130.606 111.157 129.52 113.01C129.065 113.794 128.578 114.546 128.054 115.281C127.802 115.643 127.537 115.999 127.264 116.351L126.916 116.461L125.191 82.6415C125.191 71.4914 134.849 66.0768 142.437 73.3239C146.469 77.1745 156.33 72.1333 158.603 75.7844C160.873 79.439 161.752 84.4843 161.752 90.0611L165.891 114.045Z"
                fill="#2F2E41"
              />
              <path
                d="M125.511 306.143L131.067 306.274L134.163 281.303L125.965 281.108L125.511 306.143Z"
                fill="#FFB7B7"
              />
              <path
                d="M144.571 317.739C144.571 318.678 143.905 319.439 143.083 319.439H132.057C132.057 319.439 130.972 315.075 126.547 313.196L126.242 319.439H120.554L121.243 309.401C121.243 309.401 119.721 304.031 122.881 301.286C126.041 298.541 123.482 298.923 123.482 298.923L124.725 292.711L133.321 293.722L133.384 303.474L137.555 313.154L143.674 316.178C144.218 316.447 144.571 317.061 144.571 317.739H144.571H144.571Z"
                fill="#2F2E41"
              />
              <path
                d="M142.413 302.073L147.753 303.611L157.081 280.243L149.201 277.974L142.413 302.073Z"
                fill="#FFB7B7"
              />
              <path
                d="M157.907 318.129C157.669 319.037 156.832 319.604 156.037 319.396L145.371 316.596C145.371 316.596 145.429 312.099 141.626 309.159L139.747 315.12L134.245 313.676L137.457 304.142C137.457 304.142 137.347 298.561 141.1 296.708C144.853 294.855 142.281 294.575 142.281 294.575L145.059 288.881L153.116 292.042L150.704 301.491L152.284 311.913L157.435 316.392C157.894 316.79 158.079 317.473 157.907 318.129L157.907 318.129L157.907 318.129Z"
                fill="#2F2E41"
              />
              <path
                d="M155.889 104.915L138.988 106.641L128.296 168.068L160.717 173.245L155.889 104.915Z"
                fill="#F18701"
              />
              <path
                d="M123.467 116.304L125.191 156.335L110.015 182.908L121.052 192.915C121.052 192.915 141.402 152.539 142.092 141.496C142.782 130.453 138.814 107.637 138.814 107.637L123.467 116.304Z"
                fill="#2F2E41"
              />
              <path
                d="M171.755 116.304L170.03 156.335L185.206 182.908L161.752 193.606C161.752 193.606 153.819 152.539 153.129 141.496C152.439 130.453 156.407 107.637 156.407 107.637L171.755 116.304Z"
                fill="#2F2E41"
              />
              <path
                d="M130.365 164.272L122.432 165.308L117.948 213.276L124.157 285.904H134.314L141.747 204.994L154.854 235.362L145.264 285.904L154.854 286.883L174.169 234.327L160.717 173.245L130.365 164.272Z"
                fill="#2F2E41"
              />
              <path
                d="M162.923 207.577C163.298 206.255 163.941 205.127 164.706 204.322L167.486 191.5L173.545 193.002L170.073 205.847C170.301 206.934 170.255 208.231 169.88 209.554C169.023 212.574 166.77 214.58 164.849 214.034C162.928 213.489 162.065 210.597 162.923 207.577V207.577Z"
                fill="#FFB6B6"
              />
              <path
                d="M163.761 113.711C163.761 113.711 174.948 113.14 175.763 120.563C176.578 127.986 179.184 170.26 179.184 170.26L173.143 198.794L164.528 197.596L168.335 161.275L163.761 113.711H163.761Z"
                fill="#2F2E41"
              />
              <path
                d="M67.8771 135.882C69.1504 136.411 70.1988 137.183 70.9109 138.04L83.3589 142.309L81.1551 148.176L68.7651 143.214C67.6559 143.315 66.3688 143.118 65.0955 142.589C62.1866 141.381 60.4512 138.901 61.2193 137.049C61.9874 135.197 64.9682 134.674 67.8771 135.882H67.8771H67.8771Z"
                fill="#FFB6B6"
              />
              <path
                d="M138.957 118.078L138.957 118.078L110.56 156.431L77.2715 147.259L78.7188 138.571L104.066 143.374L118.208 121.623C122.825 112.692 131.926 110.894 138.957 118.078V118.078Z"
                fill="#2F2E41"
              />
              <path
                d="M146.193 101.421C153.072 101.421 158.648 95.8417 158.648 88.9594C158.648 82.077 153.072 76.4978 146.193 76.4978C139.314 76.4978 133.738 82.077 133.738 88.9594C133.738 95.8417 139.314 101.421 146.193 101.421Z"
                fill="#FFB7B7"
              />
              <path
                d="M164.511 88.5082H160.315L159.176 86.9714C158.622 86.9714 158.214 88.4489 157.684 88.3361C156.068 87.9921 154.584 87.1507 153.369 85.9775C153.266 85.8784 153.16 85.7832 153.05 85.6922L153.052 85.7204C153.149 87.2397 151.896 88.5082 150.375 88.5082H142.283C140.074 88.5082 138.463 90.5998 139.025 92.7372L138.298 118.877C138.298 113.542 114.706 86.2995 130.71 75.3944C134.415 72.8698 137.105 73.3238 142.437 73.3238C150.633 68.9503 160.944 73.0317 163.607 81.9353C164.203 83.9296 164.511 86.1348 164.511 88.5082Z"
                fill="#2F2E41"
              />
              <path
                d="M405.479 88.5945C404.879 87.9632 404.459 81.0131 403.716 80.549C404.013 81.5454 403.877 88.9782 403.834 90.0179C397.302 94.4739 392.873 83.0245 388.253 83.0245C379.884 83.0245 369.696 64.1671 369.696 55.7935C369.696 47.42 380.239 42.9728 387.943 39.7025C398.149 35.3703 407.481 45.0258 408.665 53.318C411.758 74.979 409.209 84.448 405.479 88.5945Z"
                fill="#2F2E41"
              />
              <path
                d="M385.441 71.3372C392.32 71.3372 397.896 65.758 397.896 58.8756C397.896 51.9933 392.32 46.4141 385.441 46.4141C378.563 46.4141 372.986 51.9933 372.986 58.8756C372.986 65.758 378.563 71.3372 385.441 71.3372Z"
                fill="#A0616A"
              />
              <path
                d="M367.318 56.1702L373.525 56.9411L375.051 56.0272L375.221 57.1517C376.094 57.2602 376.98 56.9214 377.508 56.2168C377.929 55.6545 378.447 55.1657 379.039 54.7883C378.96 55.1981 378.901 55.6109 378.86 56.0249C378.774 56.8889 379.38 57.6683 380.241 57.7752L389.377 58.9098C391.569 59.1821 392.911 61.4563 392.089 63.5082C392.089 63.5082 394.309 58.707 396.294 60.1257C400.624 63.2202 413.096 56.6673 402.477 47.3223C399.111 44.3602 396.386 44.4794 391.094 43.8222C383.499 38.4719 372.764 41.2514 369.025 49.7589C368.187 51.6646 367.61 53.8149 367.318 56.1703V56.1702Z"
                fill="#2F2E41"
              />
              <path
                d="M394.777 134.425H358.414C361.462 127.62 363.336 121.139 360.407 115.984L394.777 113.991C393.06 120.95 392.85 127.779 394.777 134.425Z"
                fill="#A0616A"
              />
              <path
                d="M390.294 74.1191L375.848 73.1223L369.871 80.5982L366.841 81.1495C362.298 81.9759 359.063 86.0318 359.266 90.6468L360.445 117.452L394.973 119.971L403.246 85.065L393.283 81.0966L390.294 74.1191V74.1191Z"
                fill="#E6E6E6"
              />
              <path
                d="M396.573 293.513L390.654 293.653L387.355 267.046L396.09 266.84L396.573 293.513Z"
                fill="#A0616A"
              />
              <path
                d="M376.266 305.869C376.266 306.869 376.975 307.68 377.851 307.68H389.599C389.599 307.68 390.756 303.03 395.47 301.029L395.795 307.68H401.856L401.121 296.985C401.121 296.985 402.743 291.263 399.376 288.339C396.008 285.414 398.736 285.821 398.736 285.821L397.411 279.202L388.253 280.279L388.185 290.67L383.741 300.984L377.222 304.206C376.641 304.493 376.266 305.146 376.266 305.869L376.266 305.869Z"
                fill="#2F2E41"
              />
              <path
                d="M374.924 292.894L369.005 293.034L365.705 266.428L374.44 266.221L374.924 292.894Z"
                fill="#A0616A"
              />
              <path
                d="M354.616 305.25C354.616 306.25 355.326 307.061 356.201 307.061H367.95C367.95 307.061 369.106 302.411 373.82 300.41L374.145 307.061H380.206L379.472 296.366C379.472 296.366 381.093 290.645 377.726 287.72C374.359 284.795 377.086 285.202 377.086 285.202L375.762 278.583L366.603 279.66L366.536 290.051L362.091 300.365L355.572 303.587C354.992 303.874 354.616 304.527 354.616 305.25L354.616 305.25Z"
                fill="#2F2E41"
              />
              <path
                d="M359.799 129.441L354.851 145.532L352.995 211.134L365.854 271.884L375.769 270.516L378.162 186.711L384.316 270.516L398.264 269.988C398.264 269.988 409.902 148.626 395.256 133.691L393.933 128.047L359.799 129.441Z"
                fill="#2F2E41"
              />
              <path
                d="M350.774 104.604L330.367 119.505L308.579 127.988L307.065 122.84L324.919 112.239L347.092 95.2407L350.774 104.604Z"
                fill="#A0616A"
              />
              <path
                d="M305.661 130.15C308.606 128.678 310.285 126.068 309.412 124.318C308.538 122.569 305.444 122.344 302.499 123.815C299.555 125.287 297.876 127.897 298.749 129.646C299.622 131.396 302.717 131.621 305.661 130.15Z"
                fill="#A0616A"
              />
              <path
                d="M363.837 83.3479C363.837 83.3479 370.177 92.0567 365.595 95.4821C361.013 98.9075 347.128 114.981 347.128 114.981L335.652 102.354L363.837 83.3479V83.3479Z"
                fill="#E6E6E6"
              />
              <path
                d="M66.2951 0C49.0434 0 35.0581 13.9928 35.0581 31.2537C35.0581 45.7698 47.7778 64.6727 59.7053 73.979C60.7771 74.8153 61.9743 75.3977 63.222 75.7454L64.3934 79.9648C64.6369 80.8421 65.4352 81.4492 66.3452 81.4492H66.4936C67.443 81.4492 68.2651 80.7894 68.471 79.8621L69.4339 75.5267C70.4754 75.1566 71.472 74.6187 72.3786 73.9083C85.7262 63.4508 97.5321 46.2608 97.5321 31.2537C97.5321 13.9928 83.5468 0 66.2951 0Z"
                fill="#F18701"
              />
              <path
                d="M71.5013 77.6608C67.7476 87.0701 64.7287 84.9262 62.0355 77.6608V75.7666H71.5013V77.6608H71.5013Z"
                fill="#3F3D56"
              />
              <path
                d="M67.2417 76.7185L67.0287 94.5757L67.0192 95.1818L66.9766 157.216V160.095L66.9671 161.004H66.0158L66.0253 160.142V157.216L66.0727 95.1818L66.1247 90.9057L66.2951 76.709L67.2417 76.7185Z"
                fill="#3F3D56"
              />
              <path
                d="M67.0713 161.004H66.1152L66.0253 160.142L66.0064 157.216L65.623 95.1817L63.6731 76.6094L64.6149 76.51L66.1247 90.9057L66.5743 95.1817L66.7636 157.216L66.7684 158.13L66.9766 160.095L67.0713 161.004Z"
                fill="#3F3D56"
              />
              <path
                d="M69.8637 76.6094L67.9137 95.1817L67.3647 157.216L67.3316 161.004H66.4655L66.7684 158.13L66.7731 157.216L66.9624 95.1817L67.0287 94.5756L68.9218 76.51L69.8637 76.6094Z"
                fill="#3F3D56"
              />
              <path
                d="M464.207 83.2513C453.826 74.8187 438.578 76.4027 430.15 86.7892C423.062 95.524 421.487 113.116 424.12 124.546C424.356 125.573 424.792 126.509 425.373 127.328L424.018 130.439C423.736 131.086 423.92 131.842 424.468 132.286L424.557 132.359C425.128 132.823 425.945 132.828 426.522 132.371L429.218 130.233C430.025 130.519 430.888 130.682 431.78 130.698C444.918 130.93 460.415 126.357 467.743 117.326C476.171 106.94 474.588 91.6839 464.207 83.2513H464.207Z"
                fill="#7678ED"
              />
              <path
                d="M429.42 132.527C419.196 139.276 419.793 135.248 423.724 127.9L424.649 126.76L430.345 131.387L429.42 132.527Z"
                fill="#3F3D56"
              />
              <path
                d="M427.317 129.878L418.47 140.519L418.168 140.879L387.853 178.186L386.447 179.919L385.997 180.461L385.425 179.996L385.851 179.482L387.28 177.721L417.598 140.417L419.718 137.869L426.752 129.41L427.317 129.878Z"
                fill="#3F3D56"
              />
              <path
                d="M386.06 180.512L385.485 180.045L385.851 179.482L387.269 177.712L417.328 140.197L425.223 128.068L425.838 128.469L419.718 137.869L417.9 140.662L387.724 178.082L387.281 178.635L386.447 179.919L386.06 180.512Z"
                fill="#3F3D56"
              />
              <path
                d="M428.948 131.094L418.706 141.317L388.086 178.376L386.217 180.64L385.695 180.216L387.281 178.635L387.73 178.087L418.134 140.852L418.47 140.519L428.43 130.574L428.948 131.094Z"
                fill="#3F3D56"
              />
              <path
                d="M271.631 28.5551C258.366 35.0633 252.885 51.0987 259.39 64.3712C264.86 75.5331 281.764 85.2695 294.443 87.9259C295.582 88.1646 296.722 88.1607 297.812 87.9575L300.303 90.76C300.821 91.3426 301.664 91.5083 302.363 91.165L302.477 91.109C303.207 90.7508 303.591 89.9334 303.4 89.1427L302.507 85.4458C303.168 84.7684 303.731 83.9788 304.161 83.0905C310.483 70.014 313.083 52.3424 307.428 40.803C300.923 27.5305 284.897 22.047 271.631 28.5551H271.631Z"
                fill="#F18701"
              />
              <path
                d="M304.9 86.3068C304.699 91.276 303.189 94.0225 297.622 89.8778L296.908 88.4213L304.187 84.8503L304.9 86.3068Z"
                fill="#3F3D56"
              />
              <path
                d="M301.27 87.1892L307.836 101.001L308.057 101.47L303.028 152.025L304.113 154.239L304.449 154.941L303.717 155.3L303.4 154.634L302.297 152.384L307.329 101.827L305.757 98.5196L300.539 87.539L301.27 87.1892Z"
                fill="#3F3D56"
              />
              <path
                d="M304.529 154.902L303.794 155.263L303.4 154.634L302.282 152.391L306.983 101.997L298.485 88.4518L299.172 88.02L305.757 98.5197L307.715 101.638L302.865 152.105L303.213 152.806L304.113 154.239L304.529 154.902Z"
                fill="#3F3D56"
              />
              <path
                d="M303.245 86.1162L308.745 101.133L303.327 151.878L304.729 154.804L304.063 155.131L303.213 152.806L302.872 152.102L308.013 101.492L307.836 101L302.483 86.3951L303.245 86.1162Z"
                fill="#3F3D56"
              />
              <path
                d="M0 319.264C0 319.672 0.327852 320 0.736117 320H250.193C250.601 320 250.929 319.672 250.929 319.264C250.929 318.855 250.601 318.527 250.193 318.527H0.736117C0.327852 318.527 0 318.855 0 319.264Z"
                fill="#CCCCCC"
              />
              <path
                d="M269.071 306.886C269.071 307.294 269.399 307.622 269.807 307.622H519.264C519.672 307.622 520 307.294 520 306.886C520 306.477 519.672 306.149 519.264 306.149H269.807C269.399 306.149 269.071 306.477 269.071 306.886Z"
                fill="#CCCCCC"
              />
              <path
                d="M407.63 114.119L407.305 139.394L401.02 161.924L395.995 160.049L398.226 139.397L397.933 111.45L407.63 114.119Z"
                fill="#A0616A"
              />
              <path
                d="M400.998 165.557C401.588 162.318 400.507 159.407 398.585 159.057C396.662 158.707 394.626 161.049 394.036 164.289C393.447 167.529 394.527 170.439 396.45 170.789C398.372 171.14 400.409 168.797 400.998 165.557Z"
                fill="#A0616A"
              />
              <path
                d="M400.003 84.0247C400.003 84.0247 410.77 84.173 410.761 89.8957C410.752 95.6185 409.571 116.917 409.571 116.917L392.589 118.53L400.003 84.0247Z"
                fill="#E6E6E6"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              So, why is now the perfect time to learn to code and pursue a
              career in tech?
            </h1>
            <p className="pt-16 pb 16">
              This Great Resignation combined with the dramatic rise of remote
              work gives people like you and I access to remote jobs all over
              the world that pay anywhere as low as $60K and as high as $300K
              total compensation building websites and mobile applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};

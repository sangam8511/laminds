import React from "react";
import "./review.css";
import imgr from "../ico/sub.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Make sure to import Slider if it's not imported already

export default function Review() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <h2 className="text-white">Happy Clients</h2>
          <button className="viewbtn">View All</button>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <img
                src={imgr}
                width={"250px"}
                alt=""
                className="position-absolute z-1 mt-8 mx-3"
              />
              <svg
                width="500"
                height="368"
                viewBox="0 0 529 372"
                className="position-relative"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="7"
                  y="38"
                  width="450"
                  height="295"
                  rx="10"
                  fill="#232E37"
                />
                <g opacity="0.39">
                  <path
                    opacity="0.02"
                    d="M25.0327 111.691H52.5806V124.986H8.26438V41.3844H25.0327V111.691ZM114.502 109.056H81.2046L75.695 124.986H58.0883L88.1515 41.2646H107.675L137.738 124.986H120.011L114.502 109.056ZM109.95 95.6418L97.8531 60.6679L85.756 95.6418H109.95ZM240.123 41.3844V124.986H223.354V70.6091L200.957 124.986H188.261L165.743 70.6091V124.986H148.975V41.3844H168.019L194.609 103.547L221.198 41.3844H240.123ZM273.469 41.3844V124.986H256.701V41.3844H273.469ZM361.541 124.986H344.773L306.805 67.6148V124.986H290.036V41.2646H306.805L344.773 98.7559V41.2646H361.541V124.986ZM407.337 41.3844C416.12 41.3844 423.826 43.1011 430.453 46.5346C437.16 49.9681 442.311 54.8789 445.904 61.2668C449.577 67.5749 451.414 74.921 451.414 83.3051C451.414 91.6893 449.577 99.0354 445.904 105.343C442.311 111.572 437.16 116.403 430.453 119.836C423.826 123.27 416.12 124.986 407.337 124.986H378.112V41.3844H407.337ZM406.738 110.733C415.521 110.733 422.309 108.338 427.099 103.547C431.89 98.7559 434.286 92.0087 434.286 83.3051C434.286 74.6016 431.89 67.8144 427.099 62.9436C422.309 57.993 415.521 55.5176 406.738 55.5176H394.88V110.733H406.738ZM492.831 125.825C487.002 125.825 481.732 124.827 477.021 122.83C472.39 120.834 468.716 117.96 466.002 114.207C463.287 110.454 461.889 106.022 461.81 100.912H479.776C480.015 104.345 481.213 107.06 483.369 109.056C485.605 111.053 488.639 112.051 492.472 112.051C496.384 112.051 499.458 111.133 501.694 109.296C503.93 107.38 505.048 104.904 505.048 101.87C505.048 99.3947 504.289 97.3586 502.772 95.7616C501.255 94.1646 499.339 92.9269 497.023 92.0486C494.787 91.0904 491.673 90.0524 487.681 88.9345C482.251 87.3375 477.819 85.7804 474.386 84.2633C471.032 82.6663 468.118 80.3108 465.642 77.1967C463.247 74.0027 462.049 69.7707 462.049 64.5007C462.049 59.55 463.287 55.2382 465.762 51.5651C468.237 47.8921 471.711 45.0973 476.182 43.181C480.654 41.1847 485.764 40.1866 491.513 40.1866C500.137 40.1866 507.124 42.3026 512.474 46.5346C517.903 50.6868 520.898 56.5158 521.457 64.0216H503.012C502.852 61.147 501.614 58.7915 499.299 56.9549C497.063 55.0386 494.069 54.0804 490.316 54.0804C487.042 54.0804 484.407 54.9188 482.411 56.5956C480.494 58.2724 479.536 60.7078 479.536 63.9018C479.536 66.1376 480.255 68.014 481.692 69.5312C483.209 70.9684 485.046 72.1662 487.202 73.1244C489.437 74.0027 492.551 75.0407 496.544 76.2385C501.974 77.8355 506.405 79.4324 509.839 81.0294C513.272 82.6264 516.227 85.0219 518.702 88.2158C521.177 91.4098 522.415 95.6019 522.415 100.792C522.415 105.264 521.257 109.416 518.942 113.249C516.626 117.081 513.232 120.155 508.761 122.471C504.289 124.707 498.979 125.825 492.831 125.825Z"
                    fill="white"
                  />
                  <path
                    opacity="0.02"
                    d="M25.0327 214.705H52.5806V228H8.26438V144.398H25.0327V214.705ZM114.502 212.07H81.2046L75.695 228H58.0883L88.1515 144.278H107.675L137.738 228H120.011L114.502 212.07ZM109.95 198.655L97.8531 163.682L85.756 198.655H109.95ZM240.123 144.398V228H223.354V173.623L200.957 228H188.261L165.743 173.623V228H148.975V144.398H168.019L194.609 206.561L221.198 144.398H240.123ZM273.469 144.398V228H256.701V144.398H273.469ZM361.541 228H344.773L306.805 170.628V228H290.036V144.278H306.805L344.773 201.77V144.278H361.541V228ZM407.337 144.398C416.12 144.398 423.826 146.115 430.453 149.548C437.16 152.982 442.311 157.893 445.904 164.28C449.577 170.589 451.414 177.935 451.414 186.319C451.414 194.703 449.577 202.049 445.904 208.357C442.311 214.585 437.16 219.416 430.453 222.85C423.826 226.283 416.12 228 407.337 228H378.112V144.398H407.337ZM406.738 213.747C415.521 213.747 422.309 211.351 427.099 206.561C431.89 201.77 434.286 195.022 434.286 186.319C434.286 177.615 431.89 170.828 427.099 165.957C422.309 161.007 415.521 158.531 406.738 158.531H394.88V213.747H406.738ZM492.831 228.838C487.002 228.838 481.732 227.84 477.021 225.844C472.39 223.848 468.716 220.973 466.002 217.22C463.287 213.467 461.889 209.036 461.81 203.926H479.776C480.015 207.359 481.213 210.074 483.369 212.07C485.605 214.066 488.639 215.064 492.472 215.064C496.384 215.064 499.458 214.146 501.694 212.31C503.93 210.393 505.048 207.918 505.048 204.884C505.048 202.408 504.289 200.372 502.772 198.775C501.255 197.178 499.339 195.941 497.023 195.062C494.787 194.104 491.673 193.066 487.681 191.948C482.251 190.351 477.819 188.794 474.386 187.277C471.032 185.68 468.118 183.324 465.642 180.21C463.247 177.016 462.049 172.784 462.049 167.514C462.049 162.564 463.287 158.252 465.762 154.579C468.237 150.906 471.711 148.111 476.182 146.195C480.654 144.198 485.764 143.2 491.513 143.2C500.137 143.2 507.124 145.316 512.474 149.548C517.903 153.7 520.898 159.529 521.457 167.035H503.012C502.852 164.161 501.614 161.805 499.299 159.969C497.063 158.052 494.069 157.094 490.316 157.094C487.042 157.094 484.407 157.932 482.411 159.609C480.494 161.286 479.536 163.722 479.536 166.915C479.536 169.151 480.255 171.028 481.692 172.545C483.209 173.982 485.046 175.18 487.202 176.138C489.437 177.016 492.551 178.054 496.544 179.252C501.974 180.849 506.405 182.446 509.839 184.043C513.272 185.64 516.227 188.036 518.702 191.23C521.177 194.423 522.415 198.616 522.415 203.806C522.415 208.277 521.257 212.429 518.942 216.262C516.626 220.095 513.232 223.169 508.761 225.485C504.289 227.721 498.979 228.838 492.831 228.838Z"
                    fill="white"
                  />
                  <path
                    opacity="0.02"
                    d="M25.0327 318.705H52.5806V332H8.26438V248.398H25.0327V318.705ZM114.502 316.07H81.2046L75.695 332H58.0883L88.1515 248.278H107.675L137.738 332H120.011L114.502 316.07ZM109.95 302.655L97.8531 267.682L85.756 302.655H109.95ZM240.123 248.398V332H223.354V277.623L200.957 332H188.261L165.743 277.623V332H148.975V248.398H168.019L194.609 310.561L221.198 248.398H240.123ZM273.469 248.398V332H256.701V248.398H273.469ZM361.541 332H344.773L306.805 274.628V332H290.036V248.278H306.805L344.773 305.77V248.278H361.541V332ZM407.337 248.398C416.12 248.398 423.826 250.115 430.453 253.548C437.16 256.982 442.311 261.893 445.904 268.28C449.577 274.589 451.414 281.935 451.414 290.319C451.414 298.703 449.577 306.049 445.904 312.357C442.311 318.585 437.16 323.416 430.453 326.85C423.826 330.283 416.12 332 407.337 332H378.112V248.398H407.337ZM406.738 317.747C415.521 317.747 422.309 315.351 427.099 310.561C431.89 305.77 434.286 299.022 434.286 290.319C434.286 281.615 431.89 274.828 427.099 269.957C422.309 265.007 415.521 262.531 406.738 262.531H394.88V317.747H406.738ZM492.831 332.838C487.002 332.838 481.732 331.84 477.021 329.844C472.39 327.848 468.716 324.973 466.002 321.22C463.287 317.467 461.889 313.036 461.81 307.926H479.776C480.015 311.359 481.213 314.074 483.369 316.07C485.605 318.066 488.639 319.064 492.472 319.064C496.384 319.064 499.458 318.146 501.694 316.31C503.93 314.393 505.048 311.918 505.048 308.884C505.048 306.408 504.289 304.372 502.772 302.775C501.255 301.178 499.339 299.941 497.023 299.062C494.787 298.104 491.673 297.066 487.681 295.948C482.251 294.351 477.819 292.794 474.386 291.277C471.032 289.68 468.118 287.324 465.642 284.21C463.247 281.016 462.049 276.784 462.049 271.514C462.049 266.564 463.287 262.252 465.762 258.579C468.237 254.906 471.711 252.111 476.182 250.195C480.654 248.198 485.764 247.2 491.513 247.2C500.137 247.2 507.124 249.316 512.474 253.548C517.903 257.7 520.898 263.529 521.457 271.035H503.012C502.852 268.161 501.614 265.805 499.299 263.969C497.063 262.052 494.069 261.094 490.316 261.094C487.042 261.094 484.407 261.932 482.411 263.609C480.494 265.286 479.536 267.722 479.536 270.915C479.536 273.151 480.255 275.028 481.692 276.545C483.209 277.982 485.046 279.18 487.202 280.138C489.437 281.016 492.551 282.054 496.544 283.252C501.974 284.849 506.405 286.446 509.839 288.043C513.272 289.64 516.227 292.036 518.702 295.23C521.177 298.423 522.415 302.616 522.415 307.806C522.415 312.277 521.257 316.429 518.942 320.262C516.626 324.095 513.232 327.169 508.761 329.485C504.289 331.721 498.979 332.838 492.831 332.838Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <div>
              <img
                src={imgr}
                width={"250px"}
                alt=""
                className="position-absolute z-1 mt-8 mx-3"
              />
              <svg
                width="500"
                height="368"
                viewBox="0 0 529 372"
                className="position-relative"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="7"
                  y="38"
                  width="450"
                  height="295"
                  rx="10"
                  fill="#232E37"
                />
                <g opacity="0.39">
                  <path
                    opacity="0.02"
                    d="M25.0327 111.691H52.5806V124.986H8.26438V41.3844H25.0327V111.691ZM114.502 109.056H81.2046L75.695 124.986H58.0883L88.1515 41.2646H107.675L137.738 124.986H120.011L114.502 109.056ZM109.95 95.6418L97.8531 60.6679L85.756 95.6418H109.95ZM240.123 41.3844V124.986H223.354V70.6091L200.957 124.986H188.261L165.743 70.6091V124.986H148.975V41.3844H168.019L194.609 103.547L221.198 41.3844H240.123ZM273.469 41.3844V124.986H256.701V41.3844H273.469ZM361.541 124.986H344.773L306.805 67.6148V124.986H290.036V41.2646H306.805L344.773 98.7559V41.2646H361.541V124.986ZM407.337 41.3844C416.12 41.3844 423.826 43.1011 430.453 46.5346C437.16 49.9681 442.311 54.8789 445.904 61.2668C449.577 67.5749 451.414 74.921 451.414 83.3051C451.414 91.6893 449.577 99.0354 445.904 105.343C442.311 111.572 437.16 116.403 430.453 119.836C423.826 123.27 416.12 124.986 407.337 124.986H378.112V41.3844H407.337ZM406.738 110.733C415.521 110.733 422.309 108.338 427.099 103.547C431.89 98.7559 434.286 92.0087 434.286 83.3051C434.286 74.6016 431.89 67.8144 427.099 62.9436C422.309 57.993 415.521 55.5176 406.738 55.5176H394.88V110.733H406.738ZM492.831 125.825C487.002 125.825 481.732 124.827 477.021 122.83C472.39 120.834 468.716 117.96 466.002 114.207C463.287 110.454 461.889 106.022 461.81 100.912H479.776C480.015 104.345 481.213 107.06 483.369 109.056C485.605 111.053 488.639 112.051 492.472 112.051C496.384 112.051 499.458 111.133 501.694 109.296C503.93 107.38 505.048 104.904 505.048 101.87C505.048 99.3947 504.289 97.3586 502.772 95.7616C501.255 94.1646 499.339 92.9269 497.023 92.0486C494.787 91.0904 491.673 90.0524 487.681 88.9345C482.251 87.3375 477.819 85.7804 474.386 84.2633C471.032 82.6663 468.118 80.3108 465.642 77.1967C463.247 74.0027 462.049 69.7707 462.049 64.5007C462.049 59.55 463.287 55.2382 465.762 51.5651C468.237 47.8921 471.711 45.0973 476.182 43.181C480.654 41.1847 485.764 40.1866 491.513 40.1866C500.137 40.1866 507.124 42.3026 512.474 46.5346C517.903 50.6868 520.898 56.5158 521.457 64.0216H503.012C502.852 61.147 501.614 58.7915 499.299 56.9549C497.063 55.0386 494.069 54.0804 490.316 54.0804C487.042 54.0804 484.407 54.9188 482.411 56.5956C480.494 58.2724 479.536 60.7078 479.536 63.9018C479.536 66.1376 480.255 68.014 481.692 69.5312C483.209 70.9684 485.046 72.1662 487.202 73.1244C489.437 74.0027 492.551 75.0407 496.544 76.2385C501.974 77.8355 506.405 79.4324 509.839 81.0294C513.272 82.6264 516.227 85.0219 518.702 88.2158C521.177 91.4098 522.415 95.6019 522.415 100.792C522.415 105.264 521.257 109.416 518.942 113.249C516.626 117.081 513.232 120.155 508.761 122.471C504.289 124.707 498.979 125.825 492.831 125.825Z"
                    fill="white"
                  />
                  <path
                    opacity="0.02"
                    d="M25.0327 214.705H52.5806V228H8.26438V144.398H25.0327V214.705ZM114.502 212.07H81.2046L75.695 228H58.0883L88.1515 144.278H107.675L137.738 228H120.011L114.502 212.07ZM109.95 198.655L97.8531 163.682L85.756 198.655H109.95ZM240.123 144.398V228H223.354V173.623L200.957 228H188.261L165.743 173.623V228H148.975V144.398H168.019L194.609 206.561L221.198 144.398H240.123ZM273.469 144.398V228H256.701V144.398H273.469ZM361.541 228H344.773L306.805 170.628V228H290.036V144.278H306.805L344.773 201.77V144.278H361.541V228ZM407.337 144.398C416.12 144.398 423.826 146.115 430.453 149.548C437.16 152.982 442.311 157.893 445.904 164.28C449.577 170.589 451.414 177.935 451.414 186.319C451.414 194.703 449.577 202.049 445.904 208.357C442.311 214.585 437.16 219.416 430.453 222.85C423.826 226.283 416.12 228 407.337 228H378.112V144.398H407.337ZM406.738 213.747C415.521 213.747 422.309 211.351 427.099 206.561C431.89 201.77 434.286 195.022 434.286 186.319C434.286 177.615 431.89 170.828 427.099 165.957C422.309 161.007 415.521 158.531 406.738 158.531H394.88V213.747H406.738ZM492.831 228.838C487.002 228.838 481.732 227.84 477.021 225.844C472.39 223.848 468.716 220.973 466.002 217.22C463.287 213.467 461.889 209.036 461.81 203.926H479.776C480.015 207.359 481.213 210.074 483.369 212.07C485.605 214.066 488.639 215.064 492.472 215.064C496.384 215.064 499.458 214.146 501.694 212.31C503.93 210.393 505.048 207.918 505.048 204.884C505.048 202.408 504.289 200.372 502.772 198.775C501.255 197.178 499.339 195.941 497.023 195.062C494.787 194.104 491.673 193.066 487.681 191.948C482.251 190.351 477.819 188.794 474.386 187.277C471.032 185.68 468.118 183.324 465.642 180.21C463.247 177.016 462.049 172.784 462.049 167.514C462.049 162.564 463.287 158.252 465.762 154.579C468.237 150.906 471.711 148.111 476.182 146.195C480.654 144.198 485.764 143.2 491.513 143.2C500.137 143.2 507.124 145.316 512.474 149.548C517.903 153.7 520.898 159.529 521.457 167.035H503.012C502.852 164.161 501.614 161.805 499.299 159.969C497.063 158.052 494.069 157.094 490.316 157.094C487.042 157.094 484.407 157.932 482.411 159.609C480.494 161.286 479.536 163.722 479.536 166.915C479.536 169.151 480.255 171.028 481.692 172.545C483.209 173.982 485.046 175.18 487.202 176.138C489.437 177.016 492.551 178.054 496.544 179.252C501.974 180.849 506.405 182.446 509.839 184.043C513.272 185.64 516.227 188.036 518.702 191.23C521.177 194.423 522.415 198.616 522.415 203.806C522.415 208.277 521.257 212.429 518.942 216.262C516.626 220.095 513.232 223.169 508.761 225.485C504.289 227.721 498.979 228.838 492.831 228.838Z"
                    fill="white"
                  />
                  <path
                    opacity="0.02"
                    d="M25.0327 318.705H52.5806V332H8.26438V248.398H25.0327V318.705ZM114.502 316.07H81.2046L75.695 332H58.0883L88.1515 248.278H107.675L137.738 332H120.011L114.502 316.07ZM109.95 302.655L97.8531 267.682L85.756 302.655H109.95ZM240.123 248.398V332H223.354V277.623L200.957 332H188.261L165.743 277.623V332H148.975V248.398H168.019L194.609 310.561L221.198 248.398H240.123ZM273.469 248.398V332H256.701V248.398H273.469ZM361.541 332H344.773L306.805 274.628V332H290.036V248.278H306.805L344.773 305.77V248.278H361.541V332ZM407.337 248.398C416.12 248.398 423.826 250.115 430.453 253.548C437.16 256.982 442.311 261.893 445.904 268.28C449.577 274.589 451.414 281.935 451.414 290.319C451.414 298.703 449.577 306.049 445.904 312.357C442.311 318.585 437.16 323.416 430.453 326.85C423.826 330.283 416.12 332 407.337 332H378.112V248.398H407.337ZM406.738 317.747C415.521 317.747 422.309 315.351 427.099 310.561C431.89 305.77 434.286 299.022 434.286 290.319C434.286 281.615 431.89 274.828 427.099 269.957C422.309 265.007 415.521 262.531 406.738 262.531H394.88V317.747H406.738ZM492.831 332.838C487.002 332.838 481.732 331.84 477.021 329.844C472.39 327.848 468.716 324.973 466.002 321.22C463.287 317.467 461.889 313.036 461.81 307.926H479.776C480.015 311.359 481.213 314.074 483.369 316.07C485.605 318.066 488.639 319.064 492.472 319.064C496.384 319.064 499.458 318.146 501.694 316.31C503.93 314.393 505.048 311.918 505.048 308.884C505.048 306.408 504.289 304.372 502.772 302.775C501.255 301.178 499.339 299.941 497.023 299.062C494.787 298.104 491.673 297.066 487.681 295.948C482.251 294.351 477.819 292.794 474.386 291.277C471.032 289.68 468.118 287.324 465.642 284.21C463.247 281.016 462.049 276.784 462.049 271.514C462.049 266.564 463.287 262.252 465.762 258.579C468.237 254.906 471.711 252.111 476.182 250.195C480.654 248.198 485.764 247.2 491.513 247.2C500.137 247.2 507.124 249.316 512.474 253.548C517.903 257.7 520.898 263.529 521.457 271.035H503.012C502.852 268.161 501.614 265.805 499.299 263.969C497.063 262.052 494.069 261.094 490.316 261.094C487.042 261.094 484.407 261.932 482.411 263.609C480.494 265.286 479.536 267.722 479.536 270.915C479.536 273.151 480.255 275.028 481.692 276.545C483.209 277.982 485.046 279.18 487.202 280.138C489.437 281.016 492.551 282.054 496.544 283.252C501.974 284.849 506.405 286.446 509.839 288.043C513.272 289.64 516.227 292.036 518.702 295.23C521.177 298.423 522.415 302.616 522.415 307.806C522.415 312.277 521.257 316.429 518.942 320.262C516.626 324.095 513.232 327.169 508.761 329.485C504.289 331.721 498.979 332.838 492.831 332.838Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <div>
              <img
                src={imgr}
                width={"250px"}
                alt=""
                className="position-absolute z-1 mt-8 mx-3"
              />
              <svg
                width="500"
                height="368"
                viewBox="0 0 529 372"
                className="position-relative"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="7"
                  y="38"
                  width="450"
                  height="295"
                  rx="10"
                  fill="#232E37"
                />
                <g opacity="0.39">
                  <path
                    opacity="0.02"
                    d="M25.0327 111.691H52.5806V124.986H8.26438V41.3844H25.0327V111.691ZM114.502 109.056H81.2046L75.695 124.986H58.0883L88.1515 41.2646H107.675L137.738 124.986H120.011L114.502 109.056ZM109.95 95.6418L97.8531 60.6679L85.756 95.6418H109.95ZM240.123 41.3844V124.986H223.354V70.6091L200.957 124.986H188.261L165.743 70.6091V124.986H148.975V41.3844H168.019L194.609 103.547L221.198 41.3844H240.123ZM273.469 41.3844V124.986H256.701V41.3844H273.469ZM361.541 124.986H344.773L306.805 67.6148V124.986H290.036V41.2646H306.805L344.773 98.7559V41.2646H361.541V124.986ZM407.337 41.3844C416.12 41.3844 423.826 43.1011 430.453 46.5346C437.16 49.9681 442.311 54.8789 445.904 61.2668C449.577 67.5749 451.414 74.921 451.414 83.3051C451.414 91.6893 449.577 99.0354 445.904 105.343C442.311 111.572 437.16 116.403 430.453 119.836C423.826 123.27 416.12 124.986 407.337 124.986H378.112V41.3844H407.337ZM406.738 110.733C415.521 110.733 422.309 108.338 427.099 103.547C431.89 98.7559 434.286 92.0087 434.286 83.3051C434.286 74.6016 431.89 67.8144 427.099 62.9436C422.309 57.993 415.521 55.5176 406.738 55.5176H394.88V110.733H406.738ZM492.831 125.825C487.002 125.825 481.732 124.827 477.021 122.83C472.39 120.834 468.716 117.96 466.002 114.207C463.287 110.454 461.889 106.022 461.81 100.912H479.776C480.015 104.345 481.213 107.06 483.369 109.056C485.605 111.053 488.639 112.051 492.472 112.051C496.384 112.051 499.458 111.133 501.694 109.296C503.93 107.38 505.048 104.904 505.048 101.87C505.048 99.3947 504.289 97.3586 502.772 95.7616C501.255 94.1646 499.339 92.9269 497.023 92.0486C494.787 91.0904 491.673 90.0524 487.681 88.9345C482.251 87.3375 477.819 85.7804 474.386 84.2633C471.032 82.6663 468.118 80.3108 465.642 77.1967C463.247 74.0027 462.049 69.7707 462.049 64.5007C462.049 59.55 463.287 55.2382 465.762 51.5651C468.237 47.8921 471.711 45.0973 476.182 43.181C480.654 41.1847 485.764 40.1866 491.513 40.1866C500.137 40.1866 507.124 42.3026 512.474 46.5346C517.903 50.6868 520.898 56.5158 521.457 64.0216H503.012C502.852 61.147 501.614 58.7915 499.299 56.9549C497.063 55.0386 494.069 54.0804 490.316 54.0804C487.042 54.0804 484.407 54.9188 482.411 56.5956C480.494 58.2724 479.536 60.7078 479.536 63.9018C479.536 66.1376 480.255 68.014 481.692 69.5312C483.209 70.9684 485.046 72.1662 487.202 73.1244C489.437 74.0027 492.551 75.0407 496.544 76.2385C501.974 77.8355 506.405 79.4324 509.839 81.0294C513.272 82.6264 516.227 85.0219 518.702 88.2158C521.177 91.4098 522.415 95.6019 522.415 100.792C522.415 105.264 521.257 109.416 518.942 113.249C516.626 117.081 513.232 120.155 508.761 122.471C504.289 124.707 498.979 125.825 492.831 125.825Z"
                    fill="white"
                  />
                  <path
                    opacity="0.02"
                    d="M25.0327 214.705H52.5806V228H8.26438V144.398H25.0327V214.705ZM114.502 212.07H81.2046L75.695 228H58.0883L88.1515 144.278H107.675L137.738 228H120.011L114.502 212.07ZM109.95 198.655L97.8531 163.682L85.756 198.655H109.95ZM240.123 144.398V228H223.354V173.623L200.957 228H188.261L165.743 173.623V228H148.975V144.398H168.019L194.609 206.561L221.198 144.398H240.123ZM273.469 144.398V228H256.701V144.398H273.469ZM361.541 228H344.773L306.805 170.628V228H290.036V144.278H306.805L344.773 201.77V144.278H361.541V228ZM407.337 144.398C416.12 144.398 423.826 146.115 430.453 149.548C437.16 152.982 442.311 157.893 445.904 164.28C449.577 170.589 451.414 177.935 451.414 186.319C451.414 194.703 449.577 202.049 445.904 208.357C442.311 214.585 437.16 219.416 430.453 222.85C423.826 226.283 416.12 228 407.337 228H378.112V144.398H407.337ZM406.738 213.747C415.521 213.747 422.309 211.351 427.099 206.561C431.89 201.77 434.286 195.022 434.286 186.319C434.286 177.615 431.89 170.828 427.099 165.957C422.309 161.007 415.521 158.531 406.738 158.531H394.88V213.747H406.738ZM492.831 228.838C487.002 228.838 481.732 227.84 477.021 225.844C472.39 223.848 468.716 220.973 466.002 217.22C463.287 213.467 461.889 209.036 461.81 203.926H479.776C480.015 207.359 481.213 210.074 483.369 212.07C485.605 214.066 488.639 215.064 492.472 215.064C496.384 215.064 499.458 214.146 501.694 212.31C503.93 210.393 505.048 207.918 505.048 204.884C505.048 202.408 504.289 200.372 502.772 198.775C501.255 197.178 499.339 195.941 497.023 195.062C494.787 194.104 491.673 193.066 487.681 191.948C482.251 190.351 477.819 188.794 474.386 187.277C471.032 185.68 468.118 183.324 465.642 180.21C463.247 177.016 462.049 172.784 462.049 167.514C462.049 162.564 463.287 158.252 465.762 154.579C468.237 150.906 471.711 148.111 476.182 146.195C480.654 144.198 485.764 143.2 491.513 143.2C500.137 143.2 507.124 145.316 512.474 149.548C517.903 153.7 520.898 159.529 521.457 167.035H503.012C502.852 164.161 501.614 161.805 499.299 159.969C497.063 158.052 494.069 157.094 490.316 157.094C487.042 157.094 484.407 157.932 482.411 159.609C480.494 161.286 479.536 163.722 479.536 166.915C479.536 169.151 480.255 171.028 481.692 172.545C483.209 173.982 485.046 175.18 487.202 176.138C489.437 177.016 492.551 178.054 496.544 179.252C501.974 180.849 506.405 182.446 509.839 184.043C513.272 185.64 516.227 188.036 518.702 191.23C521.177 194.423 522.415 198.616 522.415 203.806C522.415 208.277 521.257 212.429 518.942 216.262C516.626 220.095 513.232 223.169 508.761 225.485C504.289 227.721 498.979 228.838 492.831 228.838Z"
                    fill="white"
                  />
                  <path
                    opacity="0.02"
                    d="M25.0327 318.705H52.5806V332H8.26438V248.398H25.0327V318.705ZM114.502 316.07H81.2046L75.695 332H58.0883L88.1515 248.278H107.675L137.738 332H120.011L114.502 316.07ZM109.95 302.655L97.8531 267.682L85.756 302.655H109.95ZM240.123 248.398V332H223.354V277.623L200.957 332H188.261L165.743 277.623V332H148.975V248.398H168.019L194.609 310.561L221.198 248.398H240.123ZM273.469 248.398V332H256.701V248.398H273.469ZM361.541 332H344.773L306.805 274.628V332H290.036V248.278H306.805L344.773 305.77V248.278H361.541V332ZM407.337 248.398C416.12 248.398 423.826 250.115 430.453 253.548C437.16 256.982 442.311 261.893 445.904 268.28C449.577 274.589 451.414 281.935 451.414 290.319C451.414 298.703 449.577 306.049 445.904 312.357C442.311 318.585 437.16 323.416 430.453 326.85C423.826 330.283 416.12 332 407.337 332H378.112V248.398H407.337ZM406.738 317.747C415.521 317.747 422.309 315.351 427.099 310.561C431.89 305.77 434.286 299.022 434.286 290.319C434.286 281.615 431.89 274.828 427.099 269.957C422.309 265.007 415.521 262.531 406.738 262.531H394.88V317.747H406.738ZM492.831 332.838C487.002 332.838 481.732 331.84 477.021 329.844C472.39 327.848 468.716 324.973 466.002 321.22C463.287 317.467 461.889 313.036 461.81 307.926H479.776C480.015 311.359 481.213 314.074 483.369 316.07C485.605 318.066 488.639 319.064 492.472 319.064C496.384 319.064 499.458 318.146 501.694 316.31C503.93 314.393 505.048 311.918 505.048 308.884C505.048 306.408 504.289 304.372 502.772 302.775C501.255 301.178 499.339 299.941 497.023 299.062C494.787 298.104 491.673 297.066 487.681 295.948C482.251 294.351 477.819 292.794 474.386 291.277C471.032 289.68 468.118 287.324 465.642 284.21C463.247 281.016 462.049 276.784 462.049 271.514C462.049 266.564 463.287 262.252 465.762 258.579C468.237 254.906 471.711 252.111 476.182 250.195C480.654 248.198 485.764 247.2 491.513 247.2C500.137 247.2 507.124 249.316 512.474 253.548C517.903 257.7 520.898 263.529 521.457 271.035H503.012C502.852 268.161 501.614 265.805 499.299 263.969C497.063 262.052 494.069 261.094 490.316 261.094C487.042 261.094 484.407 261.932 482.411 263.609C480.494 265.286 479.536 267.722 479.536 270.915C479.536 273.151 480.255 275.028 481.692 276.545C483.209 277.982 485.046 279.18 487.202 280.138C489.437 281.016 492.551 282.054 496.544 283.252C501.974 284.849 506.405 286.446 509.839 288.043C513.272 289.64 516.227 292.036 518.702 295.23C521.177 298.423 522.415 302.616 522.415 307.806C522.415 312.277 521.257 316.429 518.942 320.262C516.626 324.095 513.232 327.169 508.761 329.485C504.289 331.721 498.979 332.838 492.831 332.838Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M990.12 918.6741l-71.4483 71.4475c-13.1316 13.1719-34.4605 13.1719-47.633 0L728.1831 847.23c-13.1725-13.1322-13.1725-34.4601 0-47.6309l3.8349-3.8336-67.1666-67.2046c-1.7134-1.7121-2.6513-3.7915-3.8747-5.7902-69.6542 56.1939-158.1486 89.9582-254.6356 89.9582C181.923 812.729 0 630.8139 0 406.3645 0 181.9572 181.923 0 406.3411 0c224.4579 0 406.3821 181.9572 406.3821 406.3645 0 96.484-33.7669 184.9745-89.9223 254.6666 1.9578 1.2233 4.0782 2.1214 5.7904 3.8336l67.1666 67.1637 3.8337-3.8745c13.1725-13.131 34.5014-13.131 47.633 0l142.8966 142.8916C1003.2926 884.2152 1003.2926 905.5442 990.12 918.6741M406.3411 156.5512c-138.0032 0-249.8241 111.858-249.8241 249.8133 0 137.9586 111.8208 249.8542 249.8241 249.8542 138.0021 0 249.865-111.8967 249.865-249.8542C656.2061 268.4093 544.3432 156.5512 406.3411 156.5512"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M339.008 776.992q19.008 0 36 7.008t30.016 19.488 20 29.504 7.008 36-7.008 36-20 29.504-30.016 20-36 7.488q-20 0-36.512-7.488t-29.504-20-20-29.504-7.008-36 7.008-36 20-29.504 29.504-19.488 36.512-7.008zM755.008 779.008q19.008 0 36.512 7.008t30.016 19.488 20 29.504 7.488 36-7.488 36-20 29.504-30.016 20-36.512 7.488-36-7.488-29.504-20-20-29.504-7.488-36 7.488-36 20-29.504 29.504-19.488 36-7.008zM923.008 211.008q28 0 43.488 7.488t22.016 18.496 6.016 23.488-3.488 21.504-12.512 36.992-21.504 61.504-23.488 66.496-17.504 52q-12.992 40-32.992 55.488t-48.992 15.488l-524.992 0 15.008 90.016 504 0q48 0 48 40.992 0 20-9.504 34.496t-37.504 14.496l-524 0q-20 0-33.504-8.992t-22.496-23.488-14.496-31.488-8.512-32q-0.992-6.016-5.504-28.992t-11.008-57.504-14.496-76.992-16-85.504q-19.008-100.992-43.008-224.992l-75.008 0q-15.008 0-24.992-7.488t-16.512-18.016-8.992-22.496-2.496-22.016q0-20 13.504-32.992t36.512-12.992l100.992 0q20 0 32 6.016t19.008 15.008 10.016 19.008 4.992 16.992q2.016 8 4 22.496t4 29.504q3.008 18.016 6.016 38.016l684 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M629.376 160 330.624 467.968 330.624 467.968 288 512 330.624 555.968 330.688 555.968 629.376 863.936 672 819.968 373.312 512 672 204.032Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shoucang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.277056 287.362048l49.173504 116.752384 23.1424 54.985728 59.409408 5.518336 128.492544 11.93472-89.040896 79.268864-43.523072 38.771712 12.481536 56.92928c9.115648 41.639936 17.125376 79.681536 23.93088 112.401408l-112.630784-65.024-50.123776-28.926976-49.941504 29.243392c-44.763136 26.179584-79.889408 46.42816-109.76256 63.224832l26.386432-107.684864 14.584832-59.53024-46.58688-39.841792c-33.886208-28.949504-64.319488-54.960128-91.689984-78.101504l121.516032-10.89024 58.947584-5.2992 23.518208-54.304768L511.277056 287.362048M512.941056 95.401984c-11.327488 0-20.28544 3.3536-26.763264 10.208256-6.598656 6.710272-11.70432 14.925824-15.1808 24.259584L368.19968 367.215616l-275.92192 24.769536c-6.477824 1.23904-12.445696 4.108288-17.794048 8.823808-5.359616 4.740096-8.725504 11.205632-9.843712 19.54304-1.240064 8.215552 0.75264 16.31232 5.736448 24.28416 5.10464 7.949312 11.194368 15.168512 18.280448 21.78048l9.844736 8.338432 22.776832 19.544064c9.33376 7.948288 19.664896 16.796672 31.356928 26.496l35.222528 29.632512c28.002304 23.626752 59.482112 50.511872 94.703616 80.62976l-30.360576 123.97056c-4.22912 15.922176-8.215552 31.478784-12.068864 46.91456-3.852288 15.31392-7.353344 29.364224-10.331136 42.077184-2.989056 12.689408-5.603328 23.50592-7.960576 32.718848l-4.484096 17.306624c-1.252352 5.226496-0.61952 10.452992 1.737728 15.435776 2.369536 4.982784 6.100992 9.33376 11.205632 12.811264 4.98176 3.620864 10.694656 5.736448 16.917504 6.731776 1.386496 0.19456 2.758656 0.268288 4.13184 0.268288 4.789248 0 9.517056-1.166336 14.17216-3.3792 2.99008-1.263616 8.836096-4.22912 17.429504-8.848384 8.701952-4.714496 18.911232-10.694656 30.859264-17.793024 11.826176-7.098368 25.147392-14.682112 39.707648-23.01952 14.560256-8.215552 29.364224-16.553984 44.168192-24.769536 34.614272-19.422208 72.936448-41.567232 115.25632-66.336768l233.104384 134.545408 12.955648 4.8384c5.590016 2.113536 9.942016 3.110912 12.932096 3.110912 8.969216 0 16.929792-1.992704 24.150016-5.712896 7.08608-3.863552 9.832448-11.692032 7.959552-23.530496-0.61952-2.358272-1.737728-8.093696-3.47648-17.306624l-6.7328-33.083392c-2.735104-13.077504-5.59104-27.516928-8.459264-43.439104-2.99008-15.945728-6.34368-31.867904-9.833472-47.79008-7.83872-37.84704-16.674816-80.047104-26.872832-126.572544l184.937472-164.662272c7.716864-8.97024 14.061568-16.433152 19.167232-22.656 5.103616-6.221824 7.596032-13.442048 7.596032-21.6576 0-8.823808-2.369536-15.31392-7.098368-19.544064-4.861952-4.108288-13.19936-7.583744-25.013248-10.573824l-276.042752-25.64608-99.954688-237.343744c-1.240064-2.358272-2.85696-5.226496-4.970496-8.823808-2.11456-3.47648-4.605952-7.098368-7.596032-10.573824-2.99008-3.621888-6.710272-6.7328-11.072512-9.33376C524.135424 96.761856 518.909952 95.401984 512.941056 95.401984"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M521.424138 91.275843c-238.699474 0-432.193373 193.46013-432.193373 432.193373 0 238.669798 193.493899 432.193373 432.193373 432.193373 238.70152 0 432.193373-193.522552 432.193373-432.193373C953.616488 284.735973 760.124635 91.275843 521.424138 91.275843zM804.83186 805.938566c-36.656875-83.381036-109.390409-147.099243-198.603267-171.298388 54.397934-29.951149 91.273796-87.787392 91.273796-154.286945 0-97.262184-78.831416-176.078251-176.078251-176.078251-97.244788 0-176.078251 78.816067-176.078251 176.078251 0 68.000743 38.626739 126.901225 95.105055 156.229181-88.571245 26.260084-160.149467 91.726098-194.836477 176.360683C169.142793 740.065276 121.2449 637.456317 121.2449 523.468193c0-221.035162 179.160449-400.178215 400.178215-400.178215 221.020836 0 400.178215 179.143053 400.178215 400.178215C921.602354 633.736599 876.973924 733.562165 804.83186 805.938566z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanzhong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.402901 955.240987c-59.925834 0-118.065999-11.740392-172.808788-34.893718-52.866045-22.361287-100.342336-54.369282-141.107785-95.134731-40.766472-40.766472-72.774467-88.24174-95.134731-141.108808-23.153326-54.741765-34.893718-112.882953-34.893718-172.807764s11.740392-118.065999 34.893718-172.807764c22.361287-52.867068 54.368258-100.342336 95.134731-141.108808 40.765449-40.766472 88.24174-72.774467 141.107785-95.134731 54.741765-23.153326 112.882953-34.893718 172.808788-34.893718s118.065999 11.740392 172.807764 34.893718c52.866045 22.360264 100.341313 54.368258 141.107785 95.134731 40.765449 40.766472 72.773444 88.24174 95.134731 141.108808 23.153326 54.741765 34.893718 112.882953 34.893718 172.807764s-11.740392 118.065999-34.893718 172.807764c-22.361287 52.866045-54.369282 100.342336-95.134731 141.108808-40.766472 40.765449-88.240717 72.773444-141.107785 95.134731C629.4689 943.500595 571.327712 955.240987 511.402901 955.240987zM511.402901 98.051153c-227.863684 0-413.244812 185.381128-413.244812 413.244812 0 227.863684 185.381128 413.244812 413.244812 413.244812 227.863684 0 413.243789-185.381128 413.243789-413.244812C924.64669 283.432281 739.266585 98.051153 511.402901 98.051153z"  ></path>' +
    '' +
    '<path d="M445.825346 711.869097 208.394772 474.438523c-5.994528-5.994528-5.994528-15.712867 0-21.707394 5.993504-5.994528 15.712867-5.993504 21.707394 0l215.72318 215.724203L792.702612 321.577043c5.993504-5.994528 15.712867-5.994528 21.707394 0 5.994528 5.993504 5.994528 15.712867 0 21.707394L445.825346 711.869097z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanzhong1" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M175.623 1024l822.273 0c14.417 0 26.105-11.688 26.105-26.105L1024.001 3.765 175.623 1024zM756.388 934.808 583.027 802.619l68.258-83.423 101.853 83.423 158.196-189.615 67.17 53.093L756.388 934.808z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanzhong2" viewBox="0 0 1037 1024">' +
    '' +
    '<path d="M966.983 244.876c0-96.156-77.949-174.115-174.115-174.115h-530.719c-96.156 0-174.115 77.949-174.115 174.115v530.719c0 96.156 77.949 174.115 174.115 174.115h530.719c96.156 0 174.115-77.949 174.115-174.115v-530.719zM782.268 401.075l-274.835 278.377c-1.259 1.741-2.619 3.397-4.151 4.953-15.58 15.801-40.82 15.801-56.384 0l-140.956-142.764c-15.58-15.801-15.58-41.317 0-57.12s40.82-15.801 56.384 0l112.419 113.845 251.141-254.4c15.58-15.801 40.82-15.801 56.384 0s15.58 41.317 0 57.12z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yikeappshijiandizhiqianrenyuan76" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M501.5552 928.0512c-10.4448 0-19.0464-0.4096-25.8048-1.3312C467.6608 925.9008 463.1552 924.672 460.8 923.7504l-5.2224-93.184 0-10.24L265.216 820.3264C258.4576 813.7728 255.8976 807.5264 255.8976 790.8352c0-14.4384 2.3552-21.1968 4.3008-24.2688l195.3792-4.7104L455.5776 638.2592 265.216 638.2592C258.7648 632.1152 255.8976 625.8688 255.8976 608.0512c0-14.4384 2.3552-21.1968 4.3008-24.2688l195.3792-4.7104L455.5776 533.504 217.9072 124.2112c-6.4512-10.3424-8.6016-16.2816-9.3184-19.456 0.7168-3.9936 3.6864-6.144 12.9024-7.168 8.3968-1.1264 19.5584-1.6384 33.8944-1.6384 11.4688 0 20.8896 0.3072 28.2624 0.9216C290.4064 97.3824 295.936 98.4064 300.032 99.7376l12.4928 11.1616 97.8944 175.0016c15.1552 27.3408 29.696 54.9888 43.9296 83.1488l51.9168 102.912c0 0 37.6832-74.6496 51.6096-103.0144 13.824-27.9552 28.2624-55.808 43.52-83.0464l97.1776-175.0016 10.0352-11.3664C710.656 98.7136 715.1616 97.5872 723.456 96.768c7.2704-0.6144 17.1008-0.9216 29.3888-0.9216 12.9024 0 23.3472 0.512 31.0272 1.536C792.4736 98.6112 794.624 100.6592 794.7264 100.6592c-1.7408 8.4992-4.7104 15.2576-9.5232 23.552L548.864 528.2816 547.5328 578.9696l190.3616 0c7.168 7.4752 9.4208 14.4384 9.4208 28.9792 0 17.92-2.8672 23.9616-4.096 25.8048L547.5328 638.2592l0 123.4944 190.3616 0c7.168 7.4752 9.4208 14.4384 9.4208 28.9792 0 16.6912-2.56 23.04-4.1984 25.2928l-195.584 4.3008 0 98.304C538.9312 925.0816 533.8112 926.1056 527.2576 926.8224 520.0896 927.744 511.488 928.0512 501.5552 928.0512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenlei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M435.190784 0 51.198976 0c-28.300288 0-51.198976 22.900736-51.198976 51.149824l0 383.543296c0 28.197888 22.898688 51.098624 51.198976 51.098624l383.991808 0c28.250112 0 51.198976-22.900736 51.198976-51.098624L486.38976 51.149824C486.38976 22.900736 463.440896 0 435.190784 0zM435.190784 536.891392 51.198976 536.891392c-28.300288 0-51.198976 22.897664-51.198976 51.195904l0 383.49312c0 28.20096 22.898688 51.098624 51.198976 51.098624l383.991808 0c28.250112 0 51.198976-22.897664 51.198976-51.098624L486.38976 588.087296C486.38976 559.789056 463.440896 536.891392 435.190784 536.891392zM907.880448 870.583296c-1.256448-1.256448-2.610176-2.353152-4.035584-3.294208 27.150336-34.69312 43.334656-78.357504 43.334656-125.802496 0-112.9984-91.6992-204.5952-204.795904-204.5952-113.097728 0-204.796928 91.5968-204.796928 204.5952 0 112.948224 91.6992 204.493824 204.796928 204.493824 47.514624 0 91.24864-16.162816 125.997056-43.278336 0.941056 1.426432 2.040832 2.778112 3.299328 4.031488l90.500096 90.396672c9.998336 10.002432 26.19904 10.002432 36.201472 0 9.998336-9.94816 9.998336-26.14784 0-36.150272L907.880448 870.583296zM742.383616 894.880768c-84.84864 0-153.595904-68.696064-153.595904-153.3952 0-84.750336 68.747264-153.399296 153.595904-153.399296 84.847616 0 153.597952 68.64896 153.597952 153.399296C895.981568 826.184704 827.232256 894.880768 742.383616 894.880768zM972.77952 0 588.787712 0c-28.300288 0-51.201024 22.900736-51.201024 51.149824l0 383.543296c0 28.197888 22.900736 51.098624 51.201024 51.098624l383.991808 0c28.249088 0 51.196928-22.900736 51.196928-51.098624L1023.976448 51.149824C1023.976448 22.900736 1001.028608 0 972.77952 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M767.104 959.936c-5.344 0-10.688-1.344-15.52-4.032L510.272 822.048 268.448 955.072c-10.72 5.92-23.904 5.152-33.888-1.92-10.016-7.072-15.104-19.264-13.12-31.328l46.88-284.736L71.872 435.008c-8.256-8.512-11.168-20.928-7.456-32.192 3.68-11.296 13.312-19.616 25.024-21.632l155.072-26.592c17.632-2.944 33.984 8.736 36.96 26.144 2.976 17.408-8.704 33.952-26.144 36.96l-95.168 16.32 165.344 170.08c7.072 7.296 10.272 17.504 8.64 27.488l-38.816 235.68L494.944 757.44c9.632-5.312 21.344-5.312 30.944 0.064l199.168 110.464L687.04 632.192c-1.632-10.016 1.632-20.224 8.704-27.456L860.416 436.48l-225.664-34.816c-10.56-1.632-19.584-8.416-24.128-18.08l-99.2-212.384L411.36 383.04c-7.552 16-26.624 22.816-42.624 15.264-15.968-7.552-22.816-26.624-15.264-42.624L482.624 82.24c5.312-11.2 16.576-18.336 28.928-18.336 0 0 0.032 0 0.064 0 12.416 0.032 23.68 7.232 28.928 18.464l120.8 258.624L931.68 382.72c11.872 1.824 21.696 10.144 25.504 21.504 3.776 11.36 0.864 23.936-7.488 32.48L752.768 637.92l45.92 284.864c1.952 12.096-3.2 24.256-13.216 31.296C780 958.016 773.568 959.936 767.104 959.936z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quxiao" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M149.970209 149.970209c-199.931835 199.931835-199.931835 524.106415 0 724.080915 199.931835 199.931835 524.14908 199.931835 724.080915 0 199.974501-199.974501 199.931835-524.14908 0-724.080915C674.076624-49.961626 349.902044-50.004292 149.970209 149.970209zM783.514344 300.793734 572.318744 511.989334l211.1956 211.1956-60.32941 60.32941L511.989334 572.318744l-211.1956 211.1956L240.464324 723.184934l211.1956-211.1956-211.1956-211.1956L300.793734 240.464324l211.1956 211.1956 211.1956-211.1956L783.514344 300.793734z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhifubao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M304.929772 556.892925C395.099327 556.892925 463.142168 593.983952 533.231411 622.249868 459.433069 712.035724 385.506823 781.997063 304.929772 781.997063 233.689429 781.997063 115.637658 757.696048 115.637658 670.851898 115.765555 595.262949 220.259922 556.892925 304.929772 556.892925L304.929772 556.892925ZM1022.960811 90.569243 1022.960811 933.430757C1022.960811 982.672288 982.672288 1022.960811 933.430757 1022.960811L90.569243 1022.960811C41.327712 1022.960811 1.039189 982.672288 1.039189 933.430757L1.039189 90.569243C1.039189 41.327712 41.327712 1.039189 90.569243 1.039189L933.430757 1.039189C982.672288 1.039189 1022.960811 41.327712 1022.960811 90.569243L1022.960811 90.569243ZM1022.577111 686.199904C951.336769 669.700799 814.867381 620.203465 684.920907 574.926841 713.058925 526.324811 736.464637 471.711478 753.347447 411.470541L756.544949 399.575832C759.74245 387.425321 762.684157 370.670415 765.370054 358.136204L562.008931 358.136204 562.008931 306.720372 817.68119 306.720372 817.68119 255.816144 562.136829 255.816144 562.136829 152.856583 459.433069 152.856583 459.433069 255.816144 204.016613 255.816144 204.016613 306.720372 459.433069 306.720372 459.433069 358.136204 255.176643 358.136204 255.176643 409.040439 636.574679 409.040439C627.62167 455.212367 610.483057 501.640096 588.100547 541.928619 570.322432 536.045213 408.528835 488.466384 303.011273 488.466384 218.597219 488.466384 78.546637 553.055928 78.546637 670.851898 78.546637 786.985165 159.123681 852.342108 303.011273 852.342108 441.143357 852.342108 542.823916 783.276066 625.06367 660.875694 781.613363 729.046432 927.035754 804.251675 1022.577111 847.354006L1022.577111 686.199904 1022.577111 686.199904Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gantanhao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.000012 2.310963c-282.180781 0-510.844518 228.663737-510.844518 510.844518 0 282.180781 228.663737 510.844518 510.844518 510.844518 282.180781 0 510.844518-228.663737 510.844518-510.844518C1022.84453 231.09633 794.059164 2.310963 512.000012 2.310963L512.000012 2.310963zM512.000012 963.914953c-248.975888 0-450.759472-201.783585-450.759472-450.759472 0-248.975888 201.783585-450.759472 450.759472-450.759472 248.975888 0 450.759472 201.783585 450.759472 450.759472C962.637855 762.131369 760.85427 963.914953 512.000012 963.914953L512.000012 963.914953zM512.000012 257.733222c-23.474522 0-42.570376 19.095855-42.570376 42.570376l0 276.707447c0 23.474522 19.095855 42.570376 42.570376 42.570376 23.474522 0 42.570376-19.095855 42.570376-42.570376L554.570389 300.303599C554.448759 276.829077 535.474534 257.733222 512.000012 257.733222L512.000012 257.733222zM512.000012 683.436987c-23.474522 0-42.570376 19.095855-42.570376 42.570376 0 23.474522 19.095855 42.570376 42.570376 42.570376 23.474522 0 42.570376-19.095855 42.570376-42.570376C554.448759 702.532842 535.474534 683.436987 512.000012 683.436987L512.000012 683.436987zM512.000012 683.436987"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhuidingbu" viewBox="0 0 1026 1024">' +
    '' +
    '<path d="M510.592 2.465C228.604 2.465 0 231.069 0 513.031c0 281.985 228.604 510.591 510.592 510.591 281.961 0 510.566-228.605 510.566-510.591C1021.158 231.069 792.554 2.465 510.592 2.465zM510.592 986.157c-261.292 0-473.127-211.834-473.127-473.126 0-261.267 211.835-473.101 473.127-473.101 261.267 0 473.101 211.834 473.101 473.101C983.693 774.323 771.859 986.157 510.592 986.157zM659.739 384.223 523.054 246.577c-3.075-3.047-7.026-4.501-10.925-4.501-0.548-0.027-0.988-0.275-1.537-0.275-2.25 0-4.281 0.494-6.204 1.345-1.92 0.741-3.732 1.867-5.324 3.404L375.719 369.731c-5.983 5.928-5.983 15.562-0.054 21.518 2.964 2.992 6.862 4.474 10.814 4.474 3.897 0 7.794-1.482 10.759-4.446l98.149-97.958 0 268.184c0 8.424 6.807 15.23 15.205 15.23 8.399 0 15.206-6.807 15.206-15.23L525.798 292.55l112.368 113.136c3.02 2.964 6.916 4.474 10.813 4.474 3.898 0 7.741-1.482 10.705-4.419C665.723 399.813 665.723 390.179 659.739 384.223zM678.073 211.335l-334.96 0c-8.399 0-15.261-6.835-15.261-15.205 0-8.427 6.861-15.234 15.261-15.234l334.96 0c8.398 0 15.205 6.807 15.205 15.234C693.278 204.5 686.472 211.335 678.073 211.335zM263.153 619.022c7.905 0.664 15.81 0.988 23.714 0.988l28.655 0c7.905 0 16.133-0.324 24.702-0.988l0 16.797c-10.545-0.648-19.113-0.987-25.69-0.987l0 149.2c0 13.185-4.122 21.074-12.351 23.714-8.244 2.625-17.955 5.265-29.148 7.905-1.328-8.568-3.952-16.458-7.905-23.714 9.881 0 17.446-0.324 22.726-0.988 5.265-0.648 7.905-5.265 7.905-13.833L295.761 634.832c-13.185 0-24.054 0.339-32.607 0.987L263.154 619.022zM329.355 809.723c18.434-3.952 33.101-9.217 43.97-15.81 10.869-6.577 17.94-14.651 21.244-24.208 3.288-9.541 5.434-21.074 6.422-34.583 0.988-13.493 1.143-27.496 0.494-41.993 7.905 1.327 15.47 2.315 22.726 2.964-1.976 7.257-3.304 17.292-3.952 30.137-0.664 12.845-2.316 26.354-4.94 40.512-2.64 14.173-10.22 26.523-22.726 37.053-12.521 10.529-28.994 19.422-49.404 26.679C340.548 823.216 335.932 816.3 329.355 809.723zM396.545 659.534c1.312-11.193 2.3-22.063 2.964-32.607L380.735 626.927c-7.905 0-18.773 0.34-32.606 0.988l0-16.798c13.169 0.664 24.038 0.988 32.606 0.988l72.13 0c11.193 0 22.386-0.324 33.595-0.988l0 16.798c-11.208-0.648-22.402-0.988-33.595-0.988l-32.607 0c-1.976 10.545-3.628 21.414-4.94 32.607l58.297 0c-0.664 9.881-0.988 28.654-0.988 56.32s0.324 47.104 0.988 58.297l-19.762 0 0-99.796-80.035 0 0 101.772L355.045 776.127c0.648-11.193 0.988-30.631 0.988-58.297 0-28.315-0.339-47.753-0.988-58.297L396.545 659.533zM460.77 790.949c10.529 7.904 20.75 15.81 30.63 23.714-6.592 5.929-12.197 11.857-16.797 17.785-11.208-11.856-20.75-20.919-28.654-27.172-7.905-6.253-16.474-12.352-25.69-18.279 6.577-5.265 11.857-10.205 15.81-14.821C441.996 776.792 450.225 783.044 460.77 790.949zM607.401 624.951c-3.952 1.976-7.58 3.952-10.869 5.928 27.667 0 45.112-0.324 52.369-0.987l0 18.773c-4.616 0-13.509-0.324-26.679-0.988l16.798 7.904c-4.616 7.257-11.209 20.102-19.762 38.536 15.81 0 27.99-0.324 36.559-0.988l0 18.773c-8.568-0.648-17.137-0.988-25.689-0.988l-74.106 0c-11.857 0-21.738 0.34-29.643 0.988l0-18.773c4.601 0.664 17.121 0.988 37.547 0.988-4.616-11.193-10.545-22.727-17.785-34.583 5.265-2.625 10.869-5.589 16.797-8.894 6.577 9.232 13.494 20.75 20.75 34.583-6.592 3.305-11.532 6.269-14.821 8.894l31.619 0c8.553-20.41 13.833-35.896 15.809-46.44l-23.714 0c-30.306 0-50.067 0.34-59.285 0.988l0-18.773c7.905 0.663 25.69 0.987 53.356 0.987-5.279-10.529-10.544-18.773-15.809-24.702 5.929-3.288 11.192-6.576 15.809-9.88C597.181 609.481 604.098 619.022 607.401 624.951zM637.044 780.08c0 15.161 0.324 30.955 0.988 47.428l-19.762 0 0-19.762-53.356 0 0 19.762-19.762 0c0.648-13.833 0.988-28.314 0.988-43.476 0-15.81-0.34-32.267-0.988-49.404l92.88 0C637.368 749.789 637.044 764.935 637.044 780.08zM618.271 791.938l0-41.5-53.356 0 0 41.5L618.271 791.938zM746.228 733.146c5.589 10.22 8.059 20.595 7.41 31.124-0.663 10.545-5.109 18.619-13.339 24.208-8.244 5.604-20.596 9.387-37.053 11.363-1.328-7.241-4.292-15.146-8.893-23.714 15.809 0 26.184-1.807 31.124-5.435 4.94-3.612 7.241-8.398 6.917-14.327-0.34-5.929-3.798-14.157-10.375-24.702-6.593-10.529-14.173-20.086-22.726-28.654 5.265-11.857 12.181-34.583 20.749-68.178l-35.57 0 0 194.652-19.762 0c0.648-13.833 0.987-29.643 0.987-47.428L665.697 661.51c0-14.481-0.663-28.979-1.976-43.476l82.999 0c-10.545 34.259-19.438 61.601-26.679 82.011C731.9 711.902 740.623 722.941 746.228 733.146z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liaotian" viewBox="0 0 1879 1024">' +
    '' +
    '<path d="M1030.954913 474.265896c-26.043931 0-47.352601 21.160694-47.352601 47.352601s21.308671 47.352601 47.352601 47.352601 47.352601-21.308671 47.352601-47.352601-21.160694-47.352601-47.352601-47.352601zM1452.54104 109.946821c0-36.402312-29.595376-65.997688-65.997687-65.997688H675.514451c-36.402312 0-65.997688 29.595376-65.997688 65.997688V176.092486h57.267052V101.216185H1395.421965v466.571098h-74.8763v57.267052H1386.543353c36.402312 0 65.997688-29.595376 65.997687-65.997688V109.946821zM843.912139 474.265896c-26.043931 0-47.352601 21.160694-47.352601 47.352601s21.308671 47.352601 47.352601 47.352601 47.352601-21.308671 47.352601-47.352601-21.308671-47.352601-47.352601-47.352601z" fill="#212121" ></path>' +
    '' +
    '<path d="M1265.498266 297.137572c0-36.402312-29.595376-65.997688-65.997688-65.997688H488.323699c-36.402312 0-65.997688 29.595376-65.997687 65.997688v449.109827c0 36.402312 29.595376 65.997688 65.997687 65.997688h83.606937V987.00578l174.760693-174.760693h452.661272c36.402312 0 65.997688-29.595376 65.997688-65.997688V297.137572h0.147977zM1204.531792 751.278613H721.387283l-88.490173 88.490173v-88.490173H483.144509V291.958382H1204.531792v459.320231z" fill="#212121" ></path>' +
    '' +
    '<path d="M656.721387 474.265896c-26.043931 0-47.352601 21.160694-47.352601 47.352601s21.308671 47.352601 47.352601 47.352601 47.352601-21.308671 47.352601-47.352601-21.160694-47.352601-47.352601-47.352601z" fill="#212121" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye_shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M884.013253 469.888L521.981414 131.053899 159.941818 468.889859c-7.078788 6.614626-7.478303 17.727354-0.85204 24.807434 6.606869 7.078788 17.723475 7.474424 24.802262 0.855919L521.955556 179.09398l338.072565 316.418586a17.508848 17.508848 0 0 0 11.993212 4.734707 17.480404 17.480404 0 0 0 12.810344-5.553132c6.619798-7.078788 6.260364-18.186343-0.818424-24.806141z"  ></path>' +
    '' +
    '<path d="M773.533737 476.847838c-9.686626 0-17.551515 7.86101-17.551515 17.54893v269.119353H615.575273V576.307717h-187.216162v187.208404H287.948283V494.396768c0-9.687919-7.850667-17.548929-17.550222-17.54893-9.700848 0-17.551515 7.86101-17.551516 17.54893v304.221091h210.614303V611.410747h117.006223v187.208405h210.620767V494.396768c0-9.687919-7.864889-17.548929-17.554101-17.54893zM650.675717 225.281293h105.306505v93.601616c0 9.707313 7.864889 17.556687 17.551515 17.556687 9.689212 0 17.554101-7.849374 17.554101-17.556687V190.17697h-140.412121c-9.686626 0-17.551515 7.849374-17.551515 17.550222 0 9.703434 7.864889 17.554101 17.551515 17.554101z"  ></path>' +
    '' +
    '<path d="M276.549818 770.527677h161.850182V591.220364h157.092202v179.307313h174.546747V492.840081h96.792566L521.967192 165.96299 164.807111 488.285091l110.15499 4.55499z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
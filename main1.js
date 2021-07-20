const isPrime = n => ![...Array(n).keys()].slice(2).map(i => !(n%i)).includes(true) && ![0,1].includes(n);
$( document ).ready(function() {
    let mainArray = []
    document.getElementById("btnNhap").addEventListener("click", function nhapMang(){
        let number = +document.getElementById("num").value;
        mainArray.push(number);
        let contentArr = document.getElementById("contentArr").innerHTML = `Mãng bạn đã nhập là: ${mainArray.join(", ")}`
        if (mainArray==0) {
            alert("Mời nhập mảng")
        }
    })
document.getElementById("btn1").addEventListener("click", function() {
        result.innerHTML = ""
        let arr1 = mainArray
        let tongDuong = 0;
        for (let i=0; i<arr1.length; i++ ) {
            if (arr1[i]>=0) {
                tongDuong += arr1[i]
            }
        }
        
        result.innerHTML += thongBao(tongDuong, 1);
    })
document.getElementById("btn2").addEventListener("click", function() {
        result.innerHTML = ""
        let arr2 = mainArray;
        let demDuong = 0;
        for (let i= 0; i<arr2.length; i++) {
            if (arr2[i]>=0) {
                demDuong++
            }
        }
        result.innerHTML += thongBao(demDuong, 2);
    });
document.getElementById("btn3").addEventListener("click", function() {
        result.innerHTML = ""
        let arr3 = mainArray;
        let min= arr3[0]
        for (let i= 0; i<arr3.length; i++) {
            if (min > arr3[i]) {
                min = arr3[i]; 
            }
        }
        result.innerHTML += thongBao(min, 3);
        
    });
document.getElementById("btn4").addEventListener("click", function() {
        result.innerHTML = ""
        let arr4 = mainArray;
        let minDuong = arr4[0]
        for (let i =0; i<arr4.length; i++ ) {
            if (arr4[i] >=0 && minDuong > arr4[i]) {  
                minDuong = arr4[i];
            } 
        }
        result.innerHTML += thongBao(minDuong, 4);
    })
document.getElementById("btn5").addEventListener("click", function() {
        result.innerHTML = ""
        let arr5 = mainArray;
        let soChan = [];
        for (let i =0; i< arr5.length; i++) {
            if (arr5[i]%2==0) {
                soChan.push(arr5[i])
            }
        }
        if (soChan == 0) {
            soChan.push(-1)
        }
        let soChanCuoi = soChan[soChan.length-1]
        result.innerHTML += thongBao(soChanCuoi, 5);
    } )
 document.getElementById("btn6").addEventListener("click", function() {
        result.innerHTML = "";
        let arr6 = mainArray
        result.innerHTML += `<div class="from-group">
        <label>Nhập vị trí 1:</label>
        <input id="num1" type="number" placeholder="Nhập vị trí muốn đổi">
        <label>Nhập vị trí 2:</label>
        <input id="num2" type="number" placeholder="Nhập vị trí muốn đổi">
        </div>
        <br>
        <p style="background-color: rgb(212,237,218);"> Chuỗi của bạn đã chọn là:${arr6}</p>
        <br>
        <button id="thayDoi" class="btn btn-success">Đổi vị trí</button>`
        document.getElementById("thayDoi").addEventListener("click", function() {
            let num1 = +document.getElementById("num1").value;
            let num2 = +document.getElementById("num2").value;
            
            if (arr6.length>0 && num1 <=arr6.length-1 && num2<= arr6.length-1) {
                let t =arr6[num1];
                arr6[num1] = arr6[num2];
                arr6[num2] =t
                result.innerHTML += thongBao (arr6, 6)
            } else if (num1> arr6.length-1) {
                alert("Mời nhập lại vị trí 1 muốn đổi phù hợp")
            } else if (num2> arr6.length-1) {
                alert("Mời nhập lại vị trí 2 muốn đổi phù hợp")
            }

            // if (num1 <= arr6.length-1 || num2<= arr6.length-1) {
            //     alert("Mời nhập lại vị trí muốn đổi phù hợp")
            // }
            // console.log(arr6);
            // alert("Mời nhập lại vị trí muốn đổi phù hợp")
            
            
        })
        
       
        
        
    });
document.getElementById("btn7").addEventListener("click", function() {
        result.innerHTML = ""
        let arr7 = mainArray.sort();
        result.innerHTML += thongBao(arr7, 7)
    })
document.getElementById("btn8").addEventListener("click", function() {
        result.innerHTML = ""
        let arr8 = mainArray;
        let isLastPrime;
        for (let j = 0; j< arr8.length; j++) {
            if (parseInt(arr8[j])>0 && isPrime(arr8[j])) {
                isLastPrime= arr8[j]
                console.log("debug123");
            }
        }
        result.innerHTML += thongBao(  typeof isLastPrime === "undefined"? "-1" : isLastPrime, 8)
       
    })
document.getElementById("btn9").addEventListener("click", function() {
        let newArr = [];
        result.innerHTML = ""
        result.innerHTML += `
        <div class="from-group">
        <label>Nhập số</label>
        <input id="numNew" type="number" >
        </div>
        <button id="nhapMoi" onclick="actionGet()" class="btn btn-success">Nhập</button>`
    })
document.getElementById("btn10").addEventListener("click", function() {
        result.innerHTML = ""
        let countDuong = 0;
        let countAm = 0;
        let arr8 =mainArray;
        console.log("debug123");
        for (let i = 0; i < arr8.length; i++) {
            if (arr8[i]>=0) {
                countDuong ++
            }else if(arr8[i]<0) {
                countAm ++
            }            
        }
        if (countDuong < countAm) {
            result.innerHTML += `<p style="background-color: rgb(212,237,218);"> Trong mảng có nhiều số dương hơn</p>`
        } else if (countDuong > countAm) {
            result.innerHTML += `<p style="background-color: rgb(212,237,218);"> Trong mảng có nhiều số âm hơn</p>`
        } else {
            result.innerHTML += `<p style="background-color: rgb(212,237,218);"> Trong mảng có số dương và số âm bằng nhau</p>`
        }
    });
})
function thongBao(result, cau) {
    if (result, cau){
        switch (true) {
            case cau == 1:     
                return  `<p style="background-color: rgb(212,237,218);"> Tổng các số dương: ${result}</p>`
            case cau == 2:
                return `<p style="background-color: rgb(212,237,218);"> Có tất cả: ${result} số dương</p>`
            case cau ==3:
                return `<p style="background-color: rgb(212,237,218);"> Số nhỏ nhất là:${result}}</p>`
            case cau == 4:
                return `<p style="background-color: rgb(212,237,218);"> Số dương nhỏ nhất là:${result}</p>`
            case cau ==5:
                return `<p style="background-color: rgb(212,237,218);"> Số chẵn cuối cùng là: ${result}</p>`
            case cau == 6:
                return `<br><p style="background-color: rgb(212,237,218);"> Chuỗi đã đổi là:${result}</p>`
            case cau == 7:
                return `<p style="background-color: rgb(212,237,218);">Chuỗi sau khi được sắp xếp là: ${result}</p>`
            case cau ==8:
                return `<p style="background-color: rgb(212,237,218);">Số nguyên tố đầu tiên là: ${result}</p>`
            default:
                return `<p>Can not calculate</p>`;
                
        }
    }
    return `<p>Can not calculate</p>`;
}
let newArr = [];
function actionGet() {
    let divResult = document.getElementById("result");
    $(".newArr").remove();
    $(".alinguyen").remove();
    let n = $("#numNew").val();
    newArr.push(n); 
    divResult.innerHTML += `<p class="newArr" style="background-color: rgb(212,237,218); margin: 20px 0">Mảng mới của bạn là ${newArr}</p>`
    let countNguyen = 0;
    console.log(newArr);
    for (let i =0; i<newArr.length; i++) {
        if (Number.isInteger(parseFloat(newArr[i]))) {
            countNguyen ++;
            console.log('debug123:::',  countNguyen);
        }
    }
    divResult.innerHTML += `<p class="alinguyen" style="background-color: rgb(212,237,218); margin: 20px 0">Mảng mới của bạn có tất cả ${countNguyen} số nguyên</p>`
}

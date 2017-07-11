/**
 * Created by cuijiya on 17-7-11.
 */
function getAve(arr) {
    var ave=[],sco=0;
    for(var i =0;i<arr.length;i++) {
        for (var j =1;j<arr[i].length;j++) {
            sco += arr[i][j]*1;
        }
        sco = sco / 4;
        ave.push(sco);
    }
    return ave;
}

function getScore(arr){
    var score=[],sco=0;
    for (var i=0;i<arr.length;i++) {
        for (var j=1;j<arr[i].length;j++) {
            sco+=arr[i][j]*1
        }
        score.push(sco)
    }
    return score
}

function getClassAverage(ave) {
    var classAverage=0;
    for (var i=0;i<ave.length;i++) {
        classAverage+=ave[i]
    }
    classAverage=(classAverage/ave.length).toFixed(1)
    return classAverage
}

function getMedian(score) {
    var median
    var newScore = score.sort(function (x, y) {
        return x - y;
    });
    if (score.length%2===0) {
        median=(score[score.length/2-1]+score[score.length/2])/2;
    }
    else {
        median=score[Math.floor(score.length/2)];
    }
    return median
}

function print(arr,ave,scor,classave,median) {
    var newArr=[]
    for (var i =0;i<arr.length;i++) {
        newArr[i]=[]
        newArr[i].push(arr[i][0]);
        newArr[i].push(arr[i][3]);
        newArr[i].push(arr[i][1]);
        newArr[i].push(arr[i][2]);
        newArr[i].push(arr[i][4]);
        newArr[i].push(ave[i]);
        newArr[i].push(scor[i]);
    }
    var str=''
    for (i=0;i<newArr.length;i++) {
        for (var j =0;j<newArr[i].length;j++) {
            str+=newArr[i][j]+'  '
        }
        str+='\n'
    }
    console.log('姓名 语文 英语 数学 编程 平均分 总分')
    console.log(str);
    console.log('全班总平均分: '+classave+'\n全班中位数: '+median)
}

var arr =[['张三','40','60','70','80'],['李斯','50','70','80','90']]
var ave=getAve(arr)
var score=getScore(arr)
var classA=getClassAverage(ave)
var median=getMedian(score)
print(arr,ave,score,classA,median
)


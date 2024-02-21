#include <QCoreApplication>
int add(int num1,int num2){
    return num1 + num2;
}
int sub(int num1 , int num2){
    return num1-num2;
}
int mul(int num1,int num2){
    return num1 *num2;
}
int divv(int num1, int num2){
    return num1 /num2;
}
int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);
    int num1 = 12;
    int num2 =4;
    qDebug() <<  add(num1,num2);
    qDebug() <<  sub(num1,num2);
    qDebug() <<  mul(num1,num2);
    qDebug() <<  divv(num1,num2);
    return a.exec();
}

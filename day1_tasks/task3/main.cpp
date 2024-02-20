#include <QCoreApplication>
#include <QDebug>
#include <QTextStream>

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);


    QTextStream in(stdin);

    qDebug() << "Enter number :";


    int num = in.readLine().toInt();

    if(num > 0){
        qDebug() << "Number is positve";
    }else if(num < 0){
        qDebug() << "Number is negative";
    }else{
        qDebug() << "Number is zero";
    }
    return a.exec();
}

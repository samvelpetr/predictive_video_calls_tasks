#include <QCoreApplication>
#include <QDebug>
int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);
    int variable1 = 123;
    float variable2= 3.145;
    double variable3 = 241241.21;
    char variable4= 'A';
    bool variable5 = true;

    qDebug() << variable1;
    qDebug() << variable2;
    qDebug() << variable3;
    qDebug() << variable4;
    qDebug() << variable5;
    return a.exec();
}

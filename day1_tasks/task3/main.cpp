#include <QCoreApplication>
#include <QDebug>
#include <QTextStream>

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);


    QTextStream in(stdin);

    char grade = 'A';
    switch (grade){
        case 'A':
        qDebug() << "80-100"
        break;
        case 'B':
        qDebug() << "60-80"
        break;
        case 'C':
        qDebug() << "40-60"
        break;
        case 'D':
        qDebug() << "20-40"
        break;
        case 'E':
        qDebug() << "0-20"
        break;
        default:
        qDebug() << "Wrong Symbol"
        break;
    }
    for (int i = 0; i <=10 ; i++)
    {
        qDebug() << i;
    }
    
    return a.exec();
}

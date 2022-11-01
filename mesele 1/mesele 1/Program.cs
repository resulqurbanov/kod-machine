int[] reqemler = { -7, -12, 9, 48, 36, 24, 12 };
int cem = 0;

for (int i = 0; i < reqemler.Length; i++)
{
    if(reqemler[i] > 0 && reqemler [i] % 6 == 0)
{
    Console.WriteLine(reqemler[i]);
    cem += reqemler[i];
}
}
Console.WriteLine("toplami " +cem);
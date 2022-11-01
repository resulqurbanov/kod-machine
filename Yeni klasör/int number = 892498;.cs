int number = 892498;
int count = 0;
for (int i = 0; i < number; i++)
{
    number /=10
    if (number > 0)
    {
        count++;
    }
}Console.WriteLine(count + 1);
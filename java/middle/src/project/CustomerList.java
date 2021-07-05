package project;
/**
 * @Description
 * @Date 14:52 2021/1/3
 * @author young
**/
public class CustomerList {
    private Customer[] Customers;
    private int total;

    public CustomerList(int totalCustomer) {
        Customers = new Customer[totalCustomer];
    }

    public boolean addCustomer(Customer customer) {
        if(total >= Customers.length){
            return false;
        }
        Customers[total] = customer;
        total++;
        // 或者
        // Customers[total++] = customer;
        return true;
    }

    public boolean replaceCustomer(int index, Customer customer) {
        if(index >= total || index < 0) {
            return false;
        }
        Customers[index] = customer;
        return true;
    }

    public boolean deleteCustomer(int index, Customer customer) {
        if(index >= total || index < 0) {
            return false;
        }

        if(index != total-1){
            // 数组是开辟的一段连续存储的空间，所以后面的要把前面的补上
            for (int i = index; i < total -1; i++) {
                Customers[i] = Customers[i+1];
            }
        }
        Customers[total-1] = null;
        total--;
        // Customers[--total] = null;
        return true;
    }

    public String getAllCustomer () {
        return Customers.toString();
    }

    public int getTotal () {
        return total;
    }

    public Customer getCustomer (int index) {
        if(index < 0 || index >= total) {
            return  null;
        }
        return Customers[index];
    }
}

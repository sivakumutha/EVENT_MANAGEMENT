
package kumutha.msystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kumutha.msystem.model.User;

public interface UserRepo  extends JpaRepository<User,Long>
{
    User findByEmail(String username);
}

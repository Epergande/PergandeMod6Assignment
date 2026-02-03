function Member(userName, firstName, lastName, enrolmentDate, cancellationDate, poolAccess, spaAccess) {
    this.id = generateUniqueId();
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.enrolmentDate = enrolmentDate;
    this.cancellationDate = cancellationDate;
    this.poolAccess = poolAccess;
    this.spaAccess = spaAccess;
}
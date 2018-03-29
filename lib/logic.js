async function AllocateContributors(AllocateContributors) {
    const project = AllocateContributors.project;
    const teamLead = AllocateContributors.teamLead;
    const contributor = AllocateContributors.contributor;

    if(contributor.allocationStatus === 'RESERVED') {
        throw new Error('Contributor is reserved for another project. Please contact the PM');
    }
    else if(contributor.allocationStatus === 'WORKING_ON_PROJECT') {
        throw new Error('Contributor is working on different project');
    }
    else {
        if(project.contributorsRequired > project.contributorsAllocated) {
            project.contributors.add(contributor);
            project.contributorsAllocated +=1;
            contributor.allocationStatus = 'WORKING_ON_PROJECT';
        }
    }
}